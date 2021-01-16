import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcasAddPageRoutingModule } from './marcas-add-routing.module';

import { MarcasAddPage } from './marcas-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MarcasAddPageRoutingModule
  ],
  declarations: [MarcasAddPage]
})
export class MarcasAddPageModule {}
