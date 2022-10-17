import { Service } from 'typedi';
import { IFilterBase } from './model';

@Service()
export class MemoryPaging<T> {
  page(data: T[], filter: IFilterBase): T[] {
    return data.slice(filter.offset, filter.limit);
  }
}
