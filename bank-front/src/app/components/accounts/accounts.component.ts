import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { AccountsService } from 'src/app/services/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accountFormFroup: FormGroup;
  currentPage: number = 0;
  pageSize: number = 5;
  account$: Observable<Account>;

  constructor(private fb: FormBuilder, private service: AccountsService) {}
  ngOnInit(): void {
    this.accountFormFroup = this.fb.group({
      accountId: this.fb.control(''),
    });
  }

  handleSearchAccount() {
    let id: string = this.accountFormFroup.value.accountId;
    this.account$ = this.service.getAccount(
      id,
      this.currentPage,
      this.pageSize
    );
  }
}
