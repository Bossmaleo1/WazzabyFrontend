import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Store} from '@ngrx/store';
import { logout} from '@wazzabysama/auth/auth.actions';
import {AppState} from '@wazzabysama/reducers';
import {Observable, of} from 'rxjs';
import {User} from '@wazzabysama/core/model/user.model';
import {AuthService} from '@wazzabysama/core/services/auth.service';
import {PublicMessageDatasource} from '@wazzabysama/core/dataSource/public-message.datasource';
import {PublicMessageService} from '@wazzabysama/core/services/public-message.service';
import {PublicMessage} from '@wazzabysama/core/model/public-message.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DateService} from '@wazzabysama/core/services/date.service';

@Component({
    selector: 'wazzaby-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    user: User;
    after = 'above';
    userUrlImage: string;
    dataSourcePublicMessage: PublicMessageDatasource;
    items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
    publicMessages: PublicMessage[];
    private _nextPagePublicMessage = 0;
    private _currentPage = 1;

    constructor(
        private _router: Router,
        private _store: Store<AppState>,
        private _authService: AuthService,
        private _publicMessageService: PublicMessageService,
        private _snackBar: MatSnackBar,
        private _dateService: DateService
    ) {}

    ngAfterViewInit(): void {}

    ngOnInit(): void {
        this.user = this._authService.getCurrentUser();
        this.userUrlImage = 'http://localhost:8000/images/'.concat(`${this.user['_images'][0].imageName}`);
        //this.dataSourcePublicMessage = new PublicMessageDatasource(this._publicMessageService, this._authService);
        //this.dataSourcePublicMessage.loadPublicMessage({problematic_id: 81, page: 1});
        this.dataSourcePublicMessage = new PublicMessageDatasource(this._publicMessageService, this._authService);
        //this._snackBar.open("request failed", "action");
    }

    logout() {
        this._store.dispatch(logout());
    }

    /**
     * @param images
     */
    displayMessagePublicImage(images: {'@id': string, '@type': string, 'imageName': string}[]): string {
        return images.length > 0 ? images[0].imageName : 'ic_profile_colorier.png';
    }

    displayPublicMessageDate(ourdate: string): string {
        return this._dateService.displayPostDate(ourdate);
    }
}
