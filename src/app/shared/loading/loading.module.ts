import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import {LoadingSpinnerComponent} from '@wazzabysama/shared/loading/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    LoadingComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoadingModule { }
