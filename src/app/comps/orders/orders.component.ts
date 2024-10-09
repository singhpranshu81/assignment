import { Component } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';
import { Order } from 'src/entity/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  customers: any[] = []
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
  showProducts(order: Order[]): string[] {
    return order.map(o => o.orderName);
  }

  showPrice(order: Order[]): number[] {
    return order.map(o => o.price);
  }
}
