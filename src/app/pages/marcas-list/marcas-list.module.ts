import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcasListPageRoutingModule } from './marcas-list-routing.module';

import { MarcasListPage } from './marcas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcasListPageRoutingModule
  ],
  declarations: [MarcasListPage]
})
export class MarcasListPageModule {}
