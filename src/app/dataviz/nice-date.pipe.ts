import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceDate'
})
export class NiceDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
