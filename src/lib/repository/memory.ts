import { BaseRepository } from '.';
import { FiltererBase } from '../filterer';
import { IFilterBase } from '../model';
import { MemoryPaging } from '../paging';

/**
 * Memory Repository
 */
export class MemoryRepository<
  T,
  TFilter extends IFilterBase
> extends BaseRepository<T, TFilter> {
  /**
   * Memory Repository Constructor
   * @param paging Paging
   * @param filterer Filterer
   */
  constructor(paging: MemoryPaging<T>, filterer: FiltererBase<T, TFilter>) {
    super();
    this.paging = paging;
    this.filterer = filterer;
  }
  datum: T[] = [];
  paging: MemoryPaging<T>;
  filterer: FiltererBase<T, TFilter>;

  /**
   * Add Data
   * @param data Data to add
   */
  add(data: T) {
    this.datum.push(data);
    return data;
  }

  /**
   * Filter Data
   * @param filter Data Filter
   */
  find(filter: TFilter) {
    const filteredList = this.filterer.filter(this.datum, filter);
    return this.paging.page(filteredList, filter);
  }
}
