import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories = [];

  constructor(
    private backend: BackendService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.backend.getCategories().then(response => {
      this.categories = response;
    }).catch(error => {
      console.error(error);
    });
  }

  goToProducts(category: string) {
    this.router.navigate(['/products-by-categories', category]);
  }

}
