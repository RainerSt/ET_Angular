4
5
6
7
8
9
10
11
12
13
14
15
16
	
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {
 
  transform(items: any[], value: string, 
                          label:string, label2:string, label3:string,
                          label4:string, label5:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];
    return items.filter(e =>  e[label].toLowerCase().indexOf(value) > -1 ||
                              e[label2].toLowerCase().indexOf(value) > -1||
                              e[label3].toLowerCase().indexOf(value) > -1||
                              e[label4].toLowerCase().indexOf(value) > -1||
                              e[label5].toLowerCase().indexOf(value) > -1);
    
  }
 
}
