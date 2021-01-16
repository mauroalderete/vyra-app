import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcasAddPageRoutingModule } from './marcas-add-routing.module';

import { MarcasAddPage } from './marcas-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcasAddPageRoutingModule
  ],
  declarations: [MarcasAddPage]
})
export class MarcasAddPageModule {}
