import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommerceProductDetailPage } from './commerce-product-detail.page';

const routes: Routes = [
  {
    path: ':commerce_product',
    component: CommerceProductDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceProductDetailPageRoutingModule {}
