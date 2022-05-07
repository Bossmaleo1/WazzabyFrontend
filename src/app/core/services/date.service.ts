import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import moment, {locale} from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(
      @Inject(LOCALE_ID) public locale: string
  ) {

  }

  displayPostDate(ourdate: string): string {
      /*const date = new Date(ourdate);
      const currentDate = new Date();
      if (date.getFullYear() === currentDate.getFullYear()) {
          if ( currentDate.getMonth() > date.getMonth()) {
              return moment(new Date(ourdate)).locale(this.locale).startOf('hour').fromNow();
          }
      } else if (currentDate.getFullYear() > date.getFullYear()) {

      }*/
      /*console.log(date.getFullYear());
      console.log(currentDate.getFullYear());*/
      return moment(new Date(ourdate)).locale(this.locale).startOf('hour').fromNow();
  }
}
