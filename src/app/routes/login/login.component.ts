import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

import { DataLogin } from '../../Interfaces/DataLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user?: string;
  password?: string;
  loading=false;
  constructor(
    private productService: ProductService,
    private router: Router
    ) {}

  getUser(e: SubmitEvent): void {
    
    if (this.user && this.password) {
      this.loading=true;
      this.productService
        .getLogin(this.user, this.password)
        .subscribe((dataLogin) => {
          if (dataLogin.status) {
            let message: DataLogin = JSON.parse(dataLogin.data);
            localStorage.setItem('userToken', message.userToken);
            this.loading=false;
            this.router.navigate(['home']);
          }
        });
    }
  }

  ngOnInit(): void {
    document.title = "login proximate";
    if(localStorage.getItem('userToken')){
      this.router.navigate(['home'])
    }
  }

}
