import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasEditPage } from './marcas-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MarcasEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcasEditPageRoutingModule {}
