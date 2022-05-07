import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Token} from '@wazzabysama/core/model/token.model';
import {Observable} from 'rxjs';
import {User} from '@wazzabysama/core/model/user.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string): Observable<Token> {
        return this.http.post<Token>('http://localhost:8000/api/login_check', {username, password});
    }

    getUser(userName: string, authToken: string): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('content-type', 'application/json');
        headers = headers.append('Authorization', `Bearer ${authToken}`);
        return this.http.get<any>(`http://localhost:8000/api/users?username=${userName}`, {headers});
    }

    getAccessToken(): string {
        return (JSON.parse(
            localStorage.getItem('user')
        ) as User)['_token'];
    }

    getCurrentUser(): User {
        return (JSON.parse(
            localStorage.getItem('user')
        ) as User);
    }

    logout(): void {

    }
}
