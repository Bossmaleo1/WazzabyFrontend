import { Component, OnInit } from '@angular/core';
import { environment } from '@src/environments/environment';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'MALEO-SAMA';
  hide = true;
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events
        .subscribe(
            event => {
                  if (event instanceof NavigationStart) {
                      //turn on the progress bar
                      this.hide = true;
                  } else if (
                      event instanceof NavigationEnd ||
                      event instanceof NavigationError ||
                        event instanceof NavigationCancel) {
                      //navigation ends with success
                      //loadingOff
                      this.hide = false;
                  }
            }
        );
  }
}
