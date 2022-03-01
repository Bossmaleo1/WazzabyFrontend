import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
  }

  connexion() {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }

}
