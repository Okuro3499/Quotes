import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    // tslint:disable-next-line: prefer-const
    let today = new Date(); // get current date and time
    // tslint:disable-next-line: prefer-const && semicolon
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    // tslint:disable-next-line: prefer-const && no-var-keyword
    var dateDifference = Math.abs(value - todayWithNoTime); // returns value in milliseconds
    const secondsInDay = 86400; // 60secs * 60mins in an hr * 24hrs in a day
    // tslint:disable-next-line: prefer-const && no-var-keyword
    var dateDifferenceSeconds = dateDifference * 0.001; // converts milliseconds to secs
    // tslint:disable-next-line: prefer-const && no-var-keyword
    var dateCounter = dateDifferenceSeconds / secondsInDay;
    Math.round(dateCounter);
    return dateCounter;
  }
}

