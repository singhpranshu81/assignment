import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 
  private Url = 'assets/customerData.json';  

  constructor(private h: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.h.get(this.Url);
  }
}
