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
  listAccounts: Account[];
  operationFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private service: AccountsService) {}

  ngOnInit(): void {
    this.accountFormFroup = this.fb.group({
      accountId: this.fb.control(''),
    });

    this.operationFormGroup = this.fb.group({
      operationType: this.fb.control(null),
      amount: this.fb.control(0),
      description: this.fb.control(null),
      accountDestination: this.fb.control(null),
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

  goToPage(page: number) {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation() {
    let accountId: string = this.accountFormGroup.value.accountId;
    let operationType = this.operationFromGroup.value.operationType;
    let amount: number = this.operationFromGroup.value.amount;
    let description: string = this.operationFromGroup.value.description;
    let accountDestination: string =
      this.operationFromGroup.value.accountDestination;
    if (operationType == 'DEBIT') {
      this.service.debit(accountId, amount, description).subscribe({
        next: (data) => {
          alert('Success Credit');
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else if (operationType == 'CREDIT') {
      this.service.credit(accountId, amount, description).subscribe({
        next: (data) => {
          alert('Success Debit');
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else if (operationType == 'TRANSFER') {
      this.service
        .transfer(accountId, accountDestination, amount, description)
        .subscribe({
          next: (data) => {
            alert('Success Transfer');
            this.operationFromGroup.reset();
            this.handleSearchAccount();
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }
}
