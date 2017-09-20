import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: Array<any>, args?: any): any {
    // console.log(products);
    return products.sort(function(a, b){
      if(a[args.property] < b[args.property]){
        return args.isDesc? 1: -1;
      }else if(a[args.property] > b[args.property]){
        return args.isDesc? -1: 1;
      }else{
        return 0;
      }
    });
  }

}
