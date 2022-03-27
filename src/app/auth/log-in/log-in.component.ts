import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@wazzabysama/core/services/auth.service';
import {concatMap, tap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '@wazzabysama/reducers';
import {User} from '@wazzabysama/core/model/user.model';

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
    // tslint:disable-next-line:prefer-const
    let ourToken: string;
    this.auth.login(val.email, val.password)
        .pipe(
            concatMap(token =>
            {
                ourToken = token.token;
                return this.auth.getUser(val.email, token.token);
            }),
            tap(user => {
             this.store.dispatch({
                type: 'Login Action',
                payload: {
                  user: new User(
                      user['hydra:member'][0].id,
                      user['hydra:member'][0].email,
                      user['hydra:member'][0].online,
                      user['hydra:member'][0].anonymous,
                      user['hydra:member'][0].firstName,
                      user['hydra:member'][0].lastName,
                      ourToken,
                      user['hydra:member'][0].image,
                      user['hydra:member'][0].roles,
                      user['hydra:member'][0].problematic
                  )
                }
              });
            })
        ).subscribe(data => {
          console.log(data['hydra:member'][0].problematic);

    });
    /*this.auth.getUser('sidneymaleoregis@gmail.com', `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDgzMTg3NDYsImV4cCI6MTY0ODQwNTE0Niwicm9sZXMiOlsiUk9MRV9TVVBFUl9BRE1JTiJdLCJ1c2VybmFtZSI6InNpZG5leW1hbGVvcmVnaXNAZ21haWwuY29tIn0.Evpy6VqAHkIRBP94XHGYKgVwEhPjXWrxTQGIJcCC5cZfqHqwkkcpvdTZ7Wgrzl_GmMrEINoXi3jCyaEDaKlDenV5TuBavXT0D9RKBHvgHz43bGnW8R8r7dwVDqQaCj6yOOz-5miGXxQwTGKNvxVMrl8WEcvJOjV54CnRpL_-CIAliP7OhUT8-7VDcDr4DURSGPg8uTu7lzD0zMLO2men_5L95b7lF1m3g0yoxusX02yqvt9XmdMb5Su8TXBpwicK8o-rNP6FwobIMDEqbOV3xNsMFaVfUgJVGw0oj4UFb7qyqlg92vWZXWGfkzN_LrNyE2yRJtCPZJlNGBdb6ugxOkUkBJS4ioeHMsSp_EuiqMQ8_ulpdsljYME0HEfpdga3QT_3CzABQQMPSVgkfW3dCJf1J3z1A3IGpQ_A5bjMLYmnYosFRWlhTQstuCUTWWG9O0CHwYUtVWfuQs6y-8ZHSo5e_5TJdiVIalL3X2HqWgNmsoxUWYXfd4Tmw0ncWtNMqPhw_gQnnLVGX9fGVHGxHFxGxl6Utn_6nHG9LYjE9GKEagh41KsMUazoN8upHiijqnTTPttj6MAf4I7SChlI0_23Gb0xYN1g0vabTadVLDtIiocVf_T80WFSwgKhjBgNvIeAVKc_mW2iW2olcuRs75M1gVLlXd8K3DkNe0RVGB8`).subscribe(
        maleo => {
          console.log(maleo);
        });*/
        /*.pipe(
            tap(token => {
              console.log(token);

              this.store.dispatch({
                  type: 'Login Action',
                  payload: {
                      token: token
                  }
              });
              this.router.navigateByUrl('/home');
            })
        )
        .subscribe(
            noop,
            () => alert('Login Failed')
        );*/
    /*console.log(this.form.value.email);
    console.log(this.form.value.password);*/
  }

}
