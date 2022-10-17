import { BaseRepository } from '.';
import { FiltererBase } from '../filterer';
import { IFilterBase } from '../model';
import { MemoryPaging } from '../paging';

export class MemoryRepository<
  T,
  TFilter extends IFilterBase
> extends BaseRepository<T, TFilter> {
  constructor(paging: MemoryPaging<T>, filterer: FiltererBase<T, TFilter>) {
    super();
    this.paging = paging;
    this.filterer = filterer;
  }
  datum: T[] = [];
  paging: MemoryPaging<T>;
  filterer: FiltererBase<T, TFilter>;

  add(data: T): T {
    this.datum.push(data);
    return data;
  }

  find(filter: TFilter): T[] {
    const filteredList = this.filterer.filter(this.datum, filter);
    return this.paging.page(filteredList, filter);
  }
}
