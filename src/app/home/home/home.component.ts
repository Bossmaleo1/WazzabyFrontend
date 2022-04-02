import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {isLoggedIn, isLoggedOut} from '@wazzabysama/auth/auth.selectors';
import {login, logout} from '@wazzabysama/auth/auth.actions';
import {AppState} from '@wazzabysama/reducers';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '@wazzabysama/core/model/user.model';
import {AuthService} from '@wazzabysama/core/services/auth.service';

@Component({
    selector: 'wazzaby-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

    isLoggedIn$: Observable<boolean>;
    //*ngIf="isLoggedOut$ | async"
    isLoggedOut$: Observable<boolean>;
    user: User;
    firstName: string;
    lastName: string;


    constructor(
        private _router: Router,
        private _store: Store<AppState>,
        private _authService: AuthService
    ) {
    }

    ngAfterViewInit(): void {
        this.user = this._authService.getCurrentUser();
        this.firstName = this.user.firstName;
    }

    ngOnInit(): void {
        /*this.isLoggedIn$ = this._store
            .pipe(
                select(isLoggedIn)
            );
        this.isLoggedOut$ = this._store
            .pipe(
                select(isLoggedOut)
            );*/
    }

    logout() {
        this._store.dispatch(logout());
    }

}
