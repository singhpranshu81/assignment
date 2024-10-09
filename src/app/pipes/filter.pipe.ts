import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from 'src/entity/customer';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customer: Customer[], firstName:string): Customer[] {
    if(!customer || !firstName){
      return customer;
    }
    return customer.filter(c => c.firstName.toLowerCase().includes(firstName.toLowerCase()));
  }

}
