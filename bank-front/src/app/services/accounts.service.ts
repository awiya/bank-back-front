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
}
