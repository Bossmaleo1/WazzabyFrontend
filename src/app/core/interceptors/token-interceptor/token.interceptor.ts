import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@wazzabysama/core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>  | undefined> {
    //const token = this._authService.getAccessToken();
    /*console.log(this._authService.getAccessToken());
   const token = 2;
   let maleo = 5;
   if (maleo === 1) {
    request = request.clone({
       setHeaders: {
         Authorization: `Bearer ${token}`
       }
     });
    }*/
    //return next.handle(request);
    return undefined;
  }
}
