import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'settings/:name',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'eleccionTransaccion',
    loadChildren: () => import('./eleccionTransaccion/eleccionTransaccion.module').then( m => m.TransaccionPageModule)
  },
  {
    path: 'transaccion/:eleccion',
    loadChildren: () => import('./transaccion/transaccion.module').then( m => m.TransaccionPageModule)
  },
  {
    path: 'stats',
    loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'addcard',
    loadChildren: () => import('./addcard/addcard.module').then( m => m.AddcardPageModule)
  },
  {
    path: 'datallecard/:card',
    loadChildren: () => import('./datallecard/datallecard.module').then( m => m.DatallecardPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
