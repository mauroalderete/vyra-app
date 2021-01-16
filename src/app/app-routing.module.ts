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
  },
  {
    path: 'marcas-list',
    loadChildren: () => import('./pages/marcas-list/marcas-list.module').then( m => m.MarcasListPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'marcas-detail',
    loadChildren: () => import('./pages/marcas-detail/marcas-detail.module').then( m => m.MarcasDetailPageModule),
    canActivate: [LoggedGuard]
  },
  {
    path: 'marcas-form',
    loadChildren: () => import('./pages/marcas-form/marcas-form.module').then( m => m.MarcasFormPageModule),
    canActivate: [LoggedGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
