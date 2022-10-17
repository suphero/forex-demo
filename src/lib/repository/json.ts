import * as fs from 'fs';
import path from 'path';
import { BaseRepository } from '.';
import { MissingConfigurationError } from '../helpers/errors';
import { FiltererBase } from '../filterer';
import { IFilterBase } from '../model';
import { MemoryPaging } from '../paging';

export class JsonRepository<
  T,
  TFilter extends IFilterBase
> extends BaseRepository<T, TFilter> {
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

  folderName() {
    return path.dirname(this.filePath);
  }

  readFile(): T[] {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }

    const fileContent = fs.readFileSync(this.filePath, 'utf-8');
    const datum = JSON.parse(fileContent);
    return datum;
  }

  writeFile(datum: T[]) {
    const folderName = this.folderName();
    if (folderName && !fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }
    const content = JSON.stringify(datum);
    fs.writeFileSync(this.filePath, content);
  }

  add(data: T): T {
    const datum = this.readFile();
    datum.push(data);
    this.writeFile(datum);
    return data;
  }

  find(filter: TFilter): T[] {
    const datum = this.readFile();
    const filteredList = this.filterer.filter(datum, filter);
    return this.paging.page(filteredList, filter);
  }
}
