import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(dates: any, day: any): any {

   /* if(ninja===undefined) return ninjas;
     return ninjas.filter(function(ninjas){
       return ninjas.toLowerCase().includes(ninja.toLowerCase());
     })*/

     if(day===undefined) return dates;
     return dates.filter(function(dates){
       return dates.toString().toLowerCase().includes(day);
     })
  }

}
