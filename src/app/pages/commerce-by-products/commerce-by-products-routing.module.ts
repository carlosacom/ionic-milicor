import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceByProductsPage } from './commerce-by-products.page';

const routes: Routes = [
  {
    path: '',
    component: CommerceByProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceByProductsPageRoutingModule {}
