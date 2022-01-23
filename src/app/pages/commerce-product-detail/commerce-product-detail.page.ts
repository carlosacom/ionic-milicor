import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-commerce-product-detail',
  templateUrl: './commerce-product-detail.page.html',
  styleUrls: ['./commerce-product-detail.page.scss'],
})
export class CommerceProductDetailPage {
  commerceProduct = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getCommerceProduct(params.commerce_product);
    });
  }
  getCommerceProduct(commerceProduct: string) {
    this.backend.getCommerceProduct(commerceProduct).then(response => {
      this.commerceProduct = response;
    }).catch(error => {
      console.error(error);
    });
  }
  buyProduct(destiny: 'call' | 'whatsapp') {
    if (destiny === 'call') {
      window.location.href = `tel:${this.commerceProduct.commerce.phone}`;
    } else {
      // eslint-disable-next-line max-len
      window.location.href = `https://wa.me/${this.commerceProduct.commerce.phone}/?text=Deseo Comprar ${this.commerceProduct.product.name} De ${this.commerceProduct.product.content}`;
    }
  }

}
