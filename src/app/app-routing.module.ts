import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedGuard } from './guards/logged.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [LoggedGuard]
  },  {
    path: 'marcas-list',
    loadChildren: () => import('./pages/marcas-list/marcas-list.module').then( m => m.MarcasListPageModule)
  },
  {
    path: 'marcas-edit',
    loadChildren: () => import('./pages/marcas-edit/marcas-edit.module').then( m => m.MarcasEditPageModule)
  },
  {
    path: 'marcas-add',
    loadChildren: () => import('./pages/marcas-add/marcas-add.module').then( m => m.MarcasAddPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
