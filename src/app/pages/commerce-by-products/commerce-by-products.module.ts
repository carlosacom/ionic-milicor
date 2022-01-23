import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceByProductsPageRoutingModule } from './commerce-by-products-routing.module';

import { CommerceByProductsPage } from './commerce-by-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceByProductsPageRoutingModule
  ],
  declarations: [CommerceByProductsPage]
})
export class CommerceByProductsPageModule {}
