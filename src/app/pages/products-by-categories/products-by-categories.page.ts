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
  marcas = [];
  allProducts = [];
  marcaForm = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private backend: BackendService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.getProducts(params.category);
      this.marcas = [];
      this.marcaForm = '';
    });
  }

  getProducts(category: string) {
    this.backend.getProducts(category).then(response => {
      this.allProducts = response;
      this.products = response;
      this.getMarcas();
    }).catch(error => {
      console.error(error);
    });
  }
  getMarcas() {
    this.marcas = [...new Set(this.products.map(p => p.marca))];
  }
  changeMarca(event) {
    if (event.detail.value) {
      this.products = this.allProducts.filter(p => p.marca === event.detail.value);
    } else {
      this.products = this.allProducts;
    }
  }
}
