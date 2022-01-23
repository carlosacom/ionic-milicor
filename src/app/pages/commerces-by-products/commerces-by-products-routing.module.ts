import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommercesByProductsPage } from './commerces-by-products.page';

const routes: Routes = [
  {
    path: 'product/:product',
    component: CommercesByProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercesByProductsPageRoutingModule {}
