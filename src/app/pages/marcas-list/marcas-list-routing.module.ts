import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasListPage } from './marcas-list.page';

const routes: Routes = [
  {
    path: '',
    component: MarcasListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcasListPageRoutingModule {}
