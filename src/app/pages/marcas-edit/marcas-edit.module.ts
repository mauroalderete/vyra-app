import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcasEditPageRoutingModule } from './marcas-edit-routing.module';

import { MarcasEditPage } from './marcas-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcasEditPageRoutingModule
  ],
  declarations: [MarcasEditPage]
})
export class MarcasEditPageModule {}
