import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'new-customer',
    component: NewCustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
