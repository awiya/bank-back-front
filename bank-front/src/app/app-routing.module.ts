import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './components/accounts/accounts.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
