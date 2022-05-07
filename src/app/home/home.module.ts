import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {PublicMessageModule} from '@wazzabysama/public-message/public-message.module';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from '@wazzabysama/core/interceptors/token-interceptor/token.interceptor';

@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatToolbarModule,
        MatTooltipModule,
        MatButtonModule,
        MatIconModule,
        MatBadgeModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        PublicMessageModule,
        ScrollingModule,
        MatDividerModule,
        MatCardModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
    ],
})
export class HomeModule { }
