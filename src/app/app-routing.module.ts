import { NgModule } from '@angular/core';
import {Routes, RouterModule, ExtraOptions} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'connexion', pathMatch: 'full'},
  {
    path: 'connexion',
    loadChildren: () => import('./create-new-account/create-new-account.module').then(m => m.CreateNewAccountModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {path: '**', redirectTo: 'pages'}
];

/*const config: ExtraOptions = {
  useHash: false,
};*/

@NgModule({
  imports: [RouterModule.forRoot(routes /*, {}*/, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
