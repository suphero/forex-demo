import * as fs from 'fs';
import path from 'path';
import { BaseRepository } from '.';
import { MissingConfigurationError } from '../helpers/errors';
import { FiltererBase } from '../filterer';
import { IFilterBase } from '../model';
import { MemoryPaging } from '../paging';

/**
 * Json Repository
 */
export class JsonRepository<
  T,
  TFilter extends IFilterBase
> extends BaseRepository<T, TFilter> {
  /**
   * Json Repository Constructor
   * @param paging Paging
   * @param filterer Filterer
   */
  constructor(
    paging: MemoryPaging<T>,
    filterer: FiltererBase<T, TFilter>,
    filePath: string
  ) {
    super();
    this.paging = paging;
    this.filterer = filterer;
    if (!filePath) {
      throw new MissingConfigurationError('File Path is missing');
    }
    this.filePath = path.join(process.cwd(), filePath);
  }
  paging: MemoryPaging<T>;
  filterer: FiltererBase<T, TFilter>;
  filePath: string;

  /**
   * Get Folder of the File Path
   * @returns Parent Folder
   */
  folderName() {
    return path.dirname(this.filePath);
  }

  /**
   * Get File Content
   * @returns Read File Content
   */
  readFile(): T[] {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }

    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    const datum = JSON.parse(fileContent);
    return datum;
  }

  /**
   * Write Content to File
   * @param datum Content of the File
   */
  writeFile(datum: T[]) {
    const folderName = this.folderName();
    if (folderName && !fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }
    const content = JSON.stringify(datum);
    fs.writeFileSync(this.filePath, content);
  }

  /**
   * Add Data
   * @param data Data to add
   */
  add(data: T) {
    const datum = this.readFile();
    datum.push(data);
    this.writeFile(datum);
    return data;
  }

  /**
   * Filter Data
   * @param filter Data Filter
   */
  find(filter: TFilter) {
    const datum = this.readFile();
    const filteredList = this.filterer.filter(datum, filter);
    return this.paging.page(filteredList, filter);
  }
}
