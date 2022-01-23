import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsByCategoriesPage } from './products-by-categories.page';

const routes: Routes = [
  {
    path: ':category',
    component: ProductsByCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsByCategoriesPageRoutingModule {}
