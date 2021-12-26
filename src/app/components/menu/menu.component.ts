import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DataProducts } from 'src/app/Interfaces/DataProducts';
import { ItemMenu } from 'src/app/Interfaces/ItemMenu';
import { Product } from 'src/app/Interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  baseMenu: ItemMenu[] = [];
  
  constructor(
    private router: Router, 
    private productService : ProductService){ }

  closeSesion(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
    let userToken = localStorage.getItem('userToken');
    if(userToken){
      this.productService
        .getProducts(userToken)
        .pipe(
          map<DataProducts, Product[]>(data => data.products),
          map<Product[], ItemMenu[]>(
            products => products.map(
              ({title, id}) => ({name:title, id:`/detail/${id}`})
              )
            )
        ).subscribe(itemsMenu => this.baseMenu =itemsMenu)
    }
  }

}
