import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from '@wazzabysama/create-new-account/LogIn/log-in.component';

const routes: Routes = [
  {
    path: '',
    component: LogInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewAccountRoutingModule { }
