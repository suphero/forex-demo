import { IFilterBase } from '../model';

/**
 * Base Repository
 */
export abstract class BaseRepository<T, TFilter extends IFilterBase> {
  abstract add(data: T): T;
  abstract find(filter: TFilter): T[];
}
