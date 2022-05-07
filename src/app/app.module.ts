import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {LoadingComponent} from './shared/components/loading/loading.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from './reducers';
import {AuthModule} from '@wazzabysama/auth/auth.module';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';
import { AlertDialogBoxComponent } from './shared/dialog-box/alert-dialog-box/alert-dialog-box.component';
import { MessageDialogBoxComponent } from './shared/dialog-box/message-dialog-box/message-dialog-box.component';
import { LoadingSpinnerComponent } from './shared/loading/loading-spinner/loading-spinner.component';
import {TokenInterceptor} from '@wazzabysama/core/interceptors/token-interceptor/token.interceptor';


@NgModule({
    declarations: [
        AppComponent,
        LoadingComponent,
        AlertDialogBoxComponent,
        MessageDialogBoxComponent,
        LoadingSpinnerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatProgressBarModule,
        HttpClientModule,
        AuthModule.forRoot(),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
                //strictActionSerializability: true,
                // strictStateSerializability: true
            }
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router',
            routerState: RouterState.Minimal
        })
    ],
    providers: [
        //{provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
