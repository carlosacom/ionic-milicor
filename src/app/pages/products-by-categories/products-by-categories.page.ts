import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-products-by-categories',
  templateUrl: './products-by-categories.page.html',
  styleUrls: ['./products-by-categories.page.scss'],
})
export class ProductsByCategoriesPage {
  products = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params.category);
    });
  }

  getProducts(category: string) {
    this.backend.getProducts(category).then(response => {
      this.products = response;
    }).catch(error => {
      console.error(error);
    });
  }
}
