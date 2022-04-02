import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MessageDialogBoxComponent} from '@wazzabysama/shared/dialog-box/message-dialog-box/message-dialog-box.component';
import {AlertDialogBoxComponent} from '@wazzabysama/shared/dialog-box/alert-dialog-box/alert-dialog-box.component';



@NgModule({
  declarations: [
    DialogBoxComponent,
    MessageDialogBoxComponent,
    AlertDialogBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogBoxModule { }
