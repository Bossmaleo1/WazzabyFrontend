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
      const date = new Date(ourdate);
      return moment(new Date(ourdate)).locale(this.locale).startOf('hour').fromNow();
  }
}
