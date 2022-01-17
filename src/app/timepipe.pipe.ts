import { Pipe, PipeTransform } from '@angular/core';
import { Repositories } from './model/repositories';

created_at: Date ;

@Pipe({
  name: 'timepipe'
})
export class TimepipePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): unknown {
    return this.timeDiff(value);
    
  }
   timeDiff (created_at:Date) {
    var seconds = Math.floor((new Date().getTime() - created_at.getTime()) / 1000);

    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return "Just Now"
   }

 numberEnding (number :number) {
  return (number > 1) ? 's' : '';
}

};
