import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsByCategoriesPageRoutingModule } from './products-by-categories-routing.module';

import { ProductsByCategoriesPage } from './products-by-categories.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsByCategoriesPageRoutingModule,
    SharedModule
  ],
  declarations: [ProductsByCategoriesPage]
})
export class ProductsByCategoriesPageModule {}
