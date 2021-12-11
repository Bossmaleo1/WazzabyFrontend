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
  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events
        .subscribe(
            event => {
                  if (event instanceof NavigationStart) {
                      //on allume la barre de progression
                      //loadingOn
                  } else if (
                      event instanceof NavigationEnd ||
                      event instanceof NavigationError ||
                        event instanceof NavigationCancel) {
                      //la navigation se termine par un succès
                      //loadingOff
                  }
            }
        );
  }
}
