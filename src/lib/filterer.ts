import { IFilterBase } from './model';

export abstract class FiltererBase<T, TFilter extends IFilterBase> {
  abstract filter(datum: T[], filter: TFilter): T[];
}
