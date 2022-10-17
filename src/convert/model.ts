export interface ITransaction {
  id: string;
  date: Date;
  from: {
    currency: string;
    amount: number;
  };
  to: {
    currency: string;
    amount: number;
  };
}

export interface ITransactionDto {
  id: string;
  amount: number;
}

export interface ITransactionFilter {
  id?: string;
  date?: Date;
  offset: number;
  limit: number;
}
