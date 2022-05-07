import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from "@wazzabysama/core/services/auth.service";
import {environment} from "@src/environments/environment";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
      private _authService: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {

      /*we catch the 401 error (unauthorized)
      * and we protect this root route of our application with our authGuard
      * service which depends on the isAuth variable of our application which by
      * default is true and turn to false when the token expired or is null
      */
      if (!environment?.ignoreAuth && err.status === 401) {
        //this._authService.login();
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
