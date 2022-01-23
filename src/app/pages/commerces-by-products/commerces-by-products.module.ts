import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommercesByProductsPageRoutingModule } from './commerces-by-products-routing.module';

import { CommercesByProductsPage } from './commerces-by-products.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommercesByProductsPageRoutingModule,
    SharedModule
  ],
  declarations: [CommercesByProductsPage]
})
export class CommercesByProductsPageModule {}
