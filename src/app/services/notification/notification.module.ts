import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from '@wazzabysama/services';
import { NotificationComponent } from '@wazzabysama/services/notification/components';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    MatSnackBarModule
  ]
})
export class NotificationModule {
  static forRoot(): ModuleWithProviders<NotificationModule> {
    return {
      ngModule: NotificationModule,
      providers: [
          NotificationService
      ]
    };
  }
}
