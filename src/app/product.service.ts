import { Injectable } from '@angular/core';
import { Login } from './Interfaces/Login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './Interfaces/Products';
import {environment} from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http:HttpClient
  ) { }

  getLogin(user:string, password:string): Observable<Login>{
    return this.http.post<Login>(environment.productsUrl, {user, password})
  }
  getProducts(userToken: string):Observable<Products>{
    return this.http.post<Products>(environment.urlHome, {userToken})
  }

}
