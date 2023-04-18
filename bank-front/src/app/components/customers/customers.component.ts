import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Observable<Customer[]>;
  errorMessage: string;
  searchFormGroup: FormGroup;

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control(''),
    });
    this.handleSearchCustomers();
  }

  handleSearchCustomers() {
    let kw = this.searchFormGroup.value.keyword;
    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  handleDeleteCustomer(c: Customer) {
    this.customerService.deleteCustomer(c.id).subscribe({
      next: (resp) => {
        this.customers = this.customers.pipe(
          map((data) => {
            let index = data.indexOf(c);
            data.slice(index, 1);
            return data;
          })
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
