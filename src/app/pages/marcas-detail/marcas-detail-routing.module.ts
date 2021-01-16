import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasDetailPage } from './marcas-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MarcasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarcasDetailPageRoutingModule {}
