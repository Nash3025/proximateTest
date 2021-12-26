import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Status } from '../../Interfaces/Status';
import { DataLogin } from '../../Interfaces/DataLogin';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user?: string;
  password?: string;
  loading = false;
  loginStatus: Partial<Status> = { error: false };
  constructor(private productService: ProductService, private router: Router) {}

  getUser(e: SubmitEvent): void {
    if (this.user && this.password) {
      this.loading = true;
      this.productService
        .getLogin(this.user, this.password)
        .subscribe((dataLogin) => {
          this.loading = false;
          if (dataLogin.status) {
            let message: DataLogin = JSON.parse(dataLogin.data);
            localStorage.setItem('userToken', message.userToken);
            this.router.navigate(['home']);
          } else {
            this.loginStatus = {
              error: true,
              message: 'Usuario o contraseña incorrectas',
            };
          }
        });
    } else{
      this.loginStatus = {
        error: true,
        message: 'Usuario o contraseña no ingresada'
      };
    }
  }

  ngOnInit(): void {
    document.title = 'login proximate';
    let userToken = localStorage.getItem('userToken')
    if (userToken) {
      this.router.navigate(['home']);
    }
  }
}
