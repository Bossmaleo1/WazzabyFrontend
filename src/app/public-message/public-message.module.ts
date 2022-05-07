import { NgModule } from '@angular/core';
import { PublicMessageComponent } from './public-message/public-message.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    PublicMessageComponent
  ],
  exports: [
    PublicMessageComponent
  ],
  imports: [
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class PublicMessageModule { }
