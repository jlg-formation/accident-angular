import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

moment.locale('fr');

@Pipe({
  name: 'niceDate'
})
export class NiceDatePipe implements PipeTransform {

  transform(value: string): any {
    // 2019-06-09T00:00:00Z
    const date = moment(value.substr(0, 10), 'YYYY-MM-DD');
    return date.format('ddd, D MMM YYYY');
  }

}
