import {Component, OnInit} from '@angular/core';
import {AuthService} from '@wazzabysama/core/services/auth.service';
import {User} from '@wazzabysama/core/model/user.model';
import { logout} from '@wazzabysama/auth/auth.actions';
import {Store} from '@ngrx/store';
import {AppState} from '@wazzabysama/reducers';

@Component({
    selector: 'wazzaby-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

    userUrlImage: string;
    user: User;

    constructor(
        private authService: AuthService,
        private store: Store<AppState>
    ) {
    }

    ngOnInit(): void {
        this.user = this.authService.getCurrentUser();
        this.userUrlImage = 'http://localhost:8000/images/'.concat(`${this.user['_images'][0].imageName}`);
    }

    logout() {
        this.store.dispatch(logout());
    }

}
