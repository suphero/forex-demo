import { IFilterBase } from '../model';

/**
 * Base Repository
 */
export abstract class BaseRepository<T, TFilter extends IFilterBase> {
  /**
   * Add Data
   * @param data Data to add
   */
  abstract add(data: T): T;
  /**
   * Filter Data
   * @param filter Data Filter
   */
  abstract find(filter: TFilter): T[];
}
