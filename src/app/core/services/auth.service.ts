import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Token} from '@wazzabysama/core/model/token.model';
// @ts-ignore
import {environment} from '@wazzabysama/environments/environment';
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(environment.baseUrl.concat('/api/login_check'), {username, password})
        /*.pipe(
            map(json => plaintT)
        )*/;
  }
}
