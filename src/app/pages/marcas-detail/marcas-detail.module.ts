import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcasDetailPageRoutingModule } from './marcas-detail-routing.module';

import { MarcasDetailPage } from './marcas-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcasDetailPageRoutingModule
  ],
  declarations: [MarcasDetailPage]
})
export class MarcasDetailPageModule {}
