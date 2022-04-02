import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@wazzabysama/core/services/auth.service';
import {concatMap, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '@wazzabysama/reducers';
import {User} from '@wazzabysama/core/model/user.model';
import {noop} from 'rxjs';
import { login } from '../auth.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'wazzaby-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  hide = true;
  form = this.fb.group({
    email: ['', [Validators.required,
        Validators.email
    ]],
    password: ['', [Validators.required]]
  });



  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router,
      private store: Store<AppState>
  ) {

  }

  ngOnInit(): void {
  }

  login() {
    const val = this.form.value;
    let ourToken: string;
    this.auth.login(val.email, val.password)
        .pipe(
            concatMap(token =>
            {
                ourToken = token.token;
                return this.auth.getUser(val.email, token.token);
            }),
            tap(user => {
                const newLoginAction = login({
                    user: new User(
                        user['hydra:member'][0].id,
                        user['hydra:member'][0].email,
                        user['hydra:member'][0].online,
                        user['hydra:member'][0].anonymous,
                        user['hydra:member'][0].firstName,
                        user['hydra:member'][0].lastName,
                        ourToken,
                        user['hydra:member'][0].images,
                        user['hydra:member'][0].roles,
                        user['hydra:member'][0].problematic
                    )
                });
                this.store.dispatch(newLoginAction);
                this.router.navigateByUrl('/home');
            })
        ).subscribe(
            noop,
        () => alert('Login Failed')
        );
  }

}
