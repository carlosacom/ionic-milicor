import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories = [];

  constructor(
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.backend.getCategories().then(response => {
      this.categories = response;
      console.log(response);
    }).catch(error => {
      console.error(error);
    });
  }

}
