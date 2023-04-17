import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CustomersComponent,
    AccountsComponent,
    NewCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
