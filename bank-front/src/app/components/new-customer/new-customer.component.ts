import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css'],
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
  ) {}
  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name: this.fb.control(null),
      email: this.fb.control(null),
    });
  }

  handleSaveCustomer() {
    let customer: Customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next: (data) => {
        alert('Customer is saved successfully');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
