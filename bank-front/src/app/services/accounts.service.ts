import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  getAccount(id: string, page: number, size: number): Observable<Account> {
    return this.http.get<Account>(
      environment.baseUrlAccounts +
        '/' +
        id +
        '/pageOperations?page=' +
        page +
        '&size=' +
        size
    );
  }

  allAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(environment.baseUrlAccounts);
  }

  debit(accountId: string, amount: number, description: string) {
    let data = {
      accountId: accountId,
      amount: amount,
      description: description,
    };
    return this.http.post(environment.baseUrlAccounts + '/debit', data);
  }

  credit(accountId: string, amount: number, description: string) {
    let data = {
      accountId: accountId,
      amount: amount,
      description: description,
    };
    return this.http.post(environment.baseUrlAccounts + '/credit', data);
  }

  transfer(
    accountSource: string,
    accountDestination: string,
    amount: number,
    description: string
  ) {
    let data = { accountSource, accountDestination, amount, description };
    return this.http.post(environment.baseUrlAccounts + '/transfer', data);
  }
}
