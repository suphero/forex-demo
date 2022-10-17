import { IFilterBase } from '../lib/model';

/**
 * Transaction model
 */
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

/**
 * Transaction DTO Model
 */
export interface ITransactionDto {
  id: string;
  amount: number;
}

/**
 * Transaction Filter Model
 */
export interface ITransactionFilter extends IFilterBase {
  id?: string;
  date?: Date;
  offset: number;
  limit: number;
}
