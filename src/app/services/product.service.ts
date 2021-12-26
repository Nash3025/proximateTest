import { Injectable } from '@angular/core';
import { Login } from '../Interfaces/Login';
import { HttpClient } from '@angular/common/http';
import { Observable,  map} from 'rxjs';
import { Products } from '../Interfaces/Products';
import { Product } from '../Interfaces/Product';
import { environment } from '../../environments/environment';
import { DataProducts } from '../Interfaces/DataProducts';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getLogin(user: string, password: string): Observable<Login> {
    return this.http.post<Login>(environment.productsUrl, { user, password });
  }

  getProducts(userToken: string): Observable<DataProducts> {
    return this.http
      .post<Products>(environment.urlHome, { userToken })
      .pipe(map<Products, DataProducts>((product) => JSON.parse(product.data)));
  }
  getProduct(userToken: string, id: Number): Observable<Product[]> {
    return this.http.post<Products>(environment.urlHome, { userToken }).pipe(
      map<Products, DataProducts>((product) => JSON.parse(product.data)),
      map<DataProducts, Product[]>((dProduct) => dProduct.products),
      map<Product[], Product[]>((products) =>
        products.filter((product) => product.id === id)
      )
    );
  }
}
