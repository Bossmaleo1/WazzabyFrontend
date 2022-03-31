import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import { isLoggedIn, isLoggedOut } from '@wazzabysama/auth/auth.selectors';
import {login, logout} from '@wazzabysama/auth/auth.actions';
import {AppState} from '@wazzabysama/reducers';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from "@src/app/core/model/user.model";

@Component({
  selector: 'wazzaby-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  //*ngIf="isLoggedOut$ | async"
  isLoggedOut$: Observable<boolean>;

  constructor(
      private router: Router,
      private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    /*const userProfile = localStorage.getItem('user');
    if (userProfile) {
      this.store.dispatch(login({user: JSON.parse(userProfile) as User}));
    }*/

    this.isLoggedIn$ = this.store
        .pipe(
            select(isLoggedIn)
        );
    this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );
  }

  logout() {
    this.store.dispatch(logout());
  }

}
