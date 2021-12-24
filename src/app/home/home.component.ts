import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataProducts } from '../Interfaces/DataProducts';
import { ProductService } from '../product.service';
import { Product } from '../Interfaces/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsList?: Product[];
  constructor(private router:Router, private productService: ProductService) { }

  ngOnInit(): void {
    let userToken= localStorage.getItem('userToken');
    if(!userToken){
      this.router.navigate(['login'])
    }else{  
      this.productService.getProducts(userToken)
      .subscribe(products => {
        
        let info:DataProducts = JSON.parse(products.data);
        this.productsList = info.products;
        console.log(this.productsList)
      })
    }
  }

}
