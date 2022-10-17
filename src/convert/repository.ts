import moment from 'moment';
import { ITransaction, ITransactionFilter } from './model';

const transactions: ITransaction[] = [];

/**
 * Add transaction
 * @param {ITransaction} transaction Transaction
 */
export function add(transaction: ITransaction) {
  transactions.push(transaction);
}

/**
 * Get Filtered Transactions
 * @param {ITransactionFilter} filter Filter
 * @returns Transaction array
 */
export function find(filter: ITransactionFilter): ITransaction[] {
  let result = transactions;
  if (filter.id) {
    result = result.filter((r) => r.id === filter.id);
  }
  if (filter.date) {
    const dateFrom = moment(filter.date).subtract(1, 'd');
    const dateTo = moment(filter.date).add(1, 'd');
    result = result.filter((r) => moment(r.date).isBetween(dateFrom, dateTo));
  }
  result = result.slice(filter.offset, filter.limit);
  return result;
}
