export interface Account {
  accountId: string;
  balance: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  accountOperations: AccountOperation[];
}

export interface AccountOperation {
  id: number;
  operationDate: string;
  amount: number;
  type: string;
  description: string;
}
