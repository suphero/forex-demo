import moment from 'moment';
import { Service } from 'typedi';
import { FiltererBase } from '../lib/filterer';
import { ITransaction, ITransactionFilter } from './model';

@Service()
export class ConvertFilterer extends FiltererBase<
  ITransaction,
  ITransactionFilter
> {
  filter(datum: ITransaction[], filter: ITransactionFilter): ITransaction[] {
    if (filter.id) {
      datum = datum.filter((r) => r.id === filter.id);
    }
    if (filter.date) {
      const dateFrom = moment(filter.date).subtract(1, 'd');
      const dateTo = moment(filter.date).add(1, 'd');
      datum = datum.filter((r) => moment(r.date).isBetween(dateFrom, dateTo));
    }
    return datum;
  }
}
