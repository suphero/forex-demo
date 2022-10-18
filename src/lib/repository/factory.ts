import Container, { Service } from 'typedi';
import { BaseRepository, MemoryRepository, JsonRepository } from '.';
import { RepositoryType } from '../helpers/constants';
import { NotImplementedError } from '../helpers/errors';
import { FiltererBase } from '../filterer';
import { IFilterBase } from '../model';
import { MemoryPaging } from '../paging';

/**
 * Repository Factory
 */
@Service()
export class RepositoryFactory<T, TFilter extends IFilterBase> {
  /**
   * Repository Factory Constructor
   */
  constructor(paging: MemoryPaging<T>) {
    this.paging = paging;
  }
  paging: MemoryPaging<T>;

  /**
   * Create Repository
   * @returns {BaseRepository}
   */
  createRepository = (
    filterer: FiltererBase<T, TFilter>
  ): BaseRepository<T, TFilter> => {
    const repository = process.env.REPOSITORY || RepositoryType.MEMORY;
    if (repository === RepositoryType.MEMORY) {
      return new MemoryRepository(this.paging, filterer);
    } else if (repository === RepositoryType.JSON) {
      const filePath = process.env.REPOSITORY_FILE_PATH || '';
      return new JsonRepository(this.paging, filterer, filePath);
    } else {
      throw new NotImplementedError('Not Implemented Repository');
    }
  };
}
