import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.baseUrl);
  }

  searchCustomers(mc: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(
      environment.baseUrl + '/search?keyword=' + mc
    );
  }
  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(environment.baseUrl, customer);
  }
}
