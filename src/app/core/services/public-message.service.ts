import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '@wazzabysama/core/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class PublicMessageService {

    constructor(private http: HttpClient, private _authService: AuthService) {}

    getPublicMessage(data: { problematic_id: number, page: number }): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.append('content-type', 'application/json');
        const authToken = this._authService.getAccessToken();
        headers = headers.append('Authorization', `Bearer ${authToken}`);
        return this.http.get<any>(
            `http://localhost:8000/api/public_messages?problematic=/api/problematics/${data.problematic_id}&pagination=true&_page=${data.page}`,
            {headers}
        );
    }
}
