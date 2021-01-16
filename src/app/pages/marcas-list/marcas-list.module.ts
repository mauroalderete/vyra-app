import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcasListPageRoutingModule } from './marcas-list-routing.module';

import { MarcasListPage } from './marcas-list.page';
import { MarcasListComponent } from 'src/app/componentes/marcas/marcas-list/marcas-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcasListPageRoutingModule
  ],
  declarations: [MarcasListPage, MarcasListComponent]
})
export class MarcasListPageModule {}
