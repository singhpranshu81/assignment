import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './comps/orders/orders.component';
import { LoginComponent } from './comps/login/login.component';
import { CustomerComponent } from './comps/customer/customer.component';
import { AboutComponent } from './comps/about/about.component';
import { HomeComponent } from './comps/home/home.component';
import { ListComponent } from './views/list/list.component';
import { CardComponent } from './views/card/card.component';
import { CreateNewCustomerComponent } from './views/create-new-customer/create-new-customer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    LoginComponent,
    CustomerComponent,
    AboutComponent,
    HomeComponent,
    ListComponent,
    CardComponent,
    CreateNewCustomerComponent,
    FilterPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
