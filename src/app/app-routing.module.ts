import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './comps/about/about.component';
import { LoginComponent } from './comps/login/login.component';
import { HomeComponent } from './comps/home/home.component';
import { CustomerComponent } from './comps/customer/customer.component';
import { OrdersComponent } from './comps/orders/orders.component';
import { ListComponent } from './views/list/list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrdersComponent },
  { path: 'customer', component: CustomerComponent },
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
