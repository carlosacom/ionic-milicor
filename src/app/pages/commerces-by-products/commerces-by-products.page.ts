import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-commerces-by-products',
  templateUrl: './commerces-by-products.page.html',
  styleUrls: ['./commerces-by-products.page.scss'],
})
export class CommercesByProductsPage {
  commercesByProduct = [];
  product = { name: '', description: '', content:'', image: '' };
  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getProduct(params.product);
      this.getCommerces(params.product);
    });
  }
  getProduct(product: string) {
    this.backend.getProduct(product).then(response => {
      this.product = response;
    }).catch(error => {
      console.error(error);
    });
  }
  getCommerces(product: string) {
    this.backend.getCommercesByproduct(product).then(response => {
      this.commercesByProduct = response;
    }).catch(error => {
      console.error(error);
    });
  }

}
