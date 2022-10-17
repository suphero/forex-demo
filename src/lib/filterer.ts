import { IFilterBase } from './model';

/**
 * Filterer Base
 */
export abstract class FiltererBase<T, TFilter extends IFilterBase> {
  abstract filter(datum: T[], filter: TFilter): T[];
}
