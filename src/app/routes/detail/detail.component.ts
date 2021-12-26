import { Component, OnInit } from '@angular/core';
import { Product } from '../../Interfaces/Product';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { menuDetails } from '../../utils/menuDetails';
import { ItemMenu } from 'src/app/Interfaces/ItemMenu';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  productSelected?: Product;
  productNotFind = false;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let userToken = localStorage.getItem('userToken')!;
    this.loading = true;

    if (userToken) {
      this.route.paramMap
        .pipe(
          switchMap((params: ParamMap) =>
            this.service.getProduct(userToken, + params.get('id')!)
          )
        )
        .subscribe((products) => {
          this.loading = false;
          if (products.length) {
            this.productSelected = products[0];
            document.title = this.productSelected.title;
          } else {
            this.productSelected = undefined;
            this.productNotFind = true;
          }
        });
    } else {
      this.router.navigate(['login']);
    }
  }
}
