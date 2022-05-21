import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Store} from '@ngrx/store';
import {AppState} from '@src/app/reducers';
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

    user: User;
    after = 'above';

    constructor(
        private router: Router,
        private store: Store<AppState>,
        private authService: AuthService,
        private snackBar: MatSnackBar,
    ) {}

    ngAfterViewInit(): void {}

    ngOnInit(): void {
        this.user = this.authService.getCurrentUser();
    }

}
