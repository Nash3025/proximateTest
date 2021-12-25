import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../Interfaces/Product';
import { Menu } from '../../Interfaces/Menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  productsList: Product[] = [];
  menuList: Menu[] = [];
  constructor(private router: Router, private productService: ProductService) {}
  isLoading = false;
  ngOnInit(): void {
    let userToken = localStorage.getItem('userToken');
    document.title = 'Home Proximate';
    this.isLoading = true;
    if (!userToken) {
      this.router.navigate(['login']);
    } else {
      this.productService.getProducts(userToken).subscribe((dataProducts) => {
        this.productsList = dataProducts.products;
        this.menuList = dataProducts.menu;
        this.isLoading = false;
      });
    }
  }

}
