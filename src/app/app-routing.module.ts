import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';
import {AuthGuard} from '@wazzabysama/auth/auth.guard';
import {LogInComponent} from '@wazzabysama/auth/log-in/log-in.component';

const routes: Routes = [
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {
    path: 'connexion',
    component: LogInComponent,
  },
  /*{
    path: 'connexion',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },*/
  {
    path: 'create-account',
    loadChildren: () => import('./create-new-account/create-new-account.module').then(m => m.CreateNewAccountModule),
    canActivate: [AuthGuard]/*,
    canActivateChild: [AuthGuard]*/
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuard]/*,
    canActivateChild: [AuthGuard]*/
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]/*,
    canActivateChild: [AuthGuard]*/
  },
  {path: '**', redirectTo: 'pages'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
