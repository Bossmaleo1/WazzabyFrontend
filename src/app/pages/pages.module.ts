import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {

  }
];

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
