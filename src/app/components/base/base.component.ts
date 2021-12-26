import { Component, Input, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import { Product, } from 'src/app/Interfaces/Product';
import { DataProducts } from 'src/app/Interfaces/DataProducts';
import { map, tap } from 'rxjs';
import { ItemMenu } from 'src/app/Interfaces/ItemMenu';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
