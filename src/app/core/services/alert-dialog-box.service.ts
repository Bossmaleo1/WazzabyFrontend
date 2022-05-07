import { Injectable } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {AlertDialogBoxComponent} from '@wazzabysama/shared/dialog-box/alert-dialog-box/alert-dialog-box.component';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogBoxService {

  constructor(
      private matDialog: MatDialog
  ) { }

  openDialog(data: {
    titleText: string,
    contentText: string,
    cancelButtonText: string,
    confirmButtonText: string
  }): MatDialogRef<object> {
    return this.matDialog.open(AlertDialogBoxComponent, {data});
  }

}
