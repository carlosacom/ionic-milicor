import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommerceProductDetailPageRoutingModule } from './commerce-product-detail-routing.module';

import { CommerceProductDetailPage } from './commerce-product-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommerceProductDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [CommerceProductDetailPage]
})
export class CommerceProductDetailPageModule {}
