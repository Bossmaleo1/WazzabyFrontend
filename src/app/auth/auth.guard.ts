import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedIn} from '@wazzabysama/auth/auth.selectors';
import {AppState} from '@wazzabysama/reducers';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate/*, CanActivateChild */{

  constructor(
      private store: Store<AppState>,
      private router: Router
      ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store
        .pipe(
            select(isLoggedIn),
            tap(loggedIn => {
              if (!loggedIn) {
                    this.router.navigateByUrl('/connexion');
              }
            })
        );
  }
  /*canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
}
