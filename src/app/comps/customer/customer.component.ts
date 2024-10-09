import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/customer.service';
import { Order } from 'src/entity/order';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
createCustomer() {
this.ct = true;
}


  customers: any[] = []
  clicked = false;
  card = false;
  ct =false
searchText: any;
  
  constructor(private m: CustomerService) { 
    this.m.getCustomers().subscribe(
      (data) => {
        console.log('Data fetched', data);
        this.customers = data;
      },
      (error) => {
        console.error('Error fetching customer data', error);
      }
    );
  }
  
  total( order : Order[]): number {
    return order.reduce((acc, order) => acc + order.price, 0);
  }
 
showList() {
  this.clicked = true;
}
showCardView() {
  this.card = true;
}

  // ngOnInit() {
  //   this.customerService.getCustomers().subscribe((data: any) => {
  //     this.customers = data;
  //   });
  // }
}
