import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasAddPage } from './marcas-add.page';

const routes: Routes = [
  {
    path: '',
    component: MarcasAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcasAddPageRoutingModule {}
