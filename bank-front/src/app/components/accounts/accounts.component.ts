import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accountFormFroup: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.accountFormFroup = this.fb.group({
      accountId: this.fb.control(''),
    });
  }

  handleSearchAccount() {}
}
