import { Service } from 'typedi';
import { IFilterBase } from './model';

/**
 * Memory Paging
 * This class is specifically named as memory, since the paging operation is done in-memory. Some Repository types may not need this type of class.
 */
@Service()
export class MemoryPaging<T> {
  /**
   * Get Paged Data
   * @param data Input data array
   * @param filter Filter
   * @returns Paged data
   */
  page(data: T[], filter: IFilterBase): T[] {
    return data.slice(filter.offset, filter.offset + filter.limit);
  }
}
