console.log('calendar.filter.js', 'loading...');

import Moment from 'moment';
import { Filter } from 'angular-ecmascript/module-helpers';
 
export default class CalendarFilter extends Filter {

  filter(time) {
    console.log('calendar.filter.js','filter()');

    if (!time) 
      return;
 
    return Moment(time).calendar(null, {
      lastDay : '[Yesterday]',
      sameDay : 'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY'
    });
  }
}
 
CalendarFilter.$name = 'calendar';