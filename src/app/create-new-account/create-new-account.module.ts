import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewAccountRoutingModule } from './create-new-account-routing.module';
import { EmailFormComponent } from './email-form/email-form.component';
import { CreateNewAccountStepMiddleComponent } from './create-new-account-step-middle/create-new-account-step-middle.component';
import { CreateNewAccountStepFinalComponent } from './create-new-account-step-final/create-new-account-step-final.component';


@NgModule({
  declarations: [EmailFormComponent, CreateNewAccountStepMiddleComponent, CreateNewAccountStepFinalComponent],
  imports: [
    CommonModule,
    CreateNewAccountRoutingModule
  ]
})
export class CreateNewAccountModule { }
