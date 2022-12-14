import { randomUUID } from 'crypto';
import { Service } from 'typedi';
import { ProviderFactory } from '../lib/provider';
import { ITransaction, ITransactionDto, ITransactionFilter } from './model';
import { ConvertFilterer } from './filterer';
import { RepositoryFactory } from '../lib/repository/factory';

/**
 * Convert Controller
 */
@Service()
export class ConvertController {
  /**
   * Convert Controller Constructor
   */
  constructor(
    providerFactory: ProviderFactory,
    repositoryFactory: RepositoryFactory<ITransaction, ITransactionFilter>,
    filterer: ConvertFilterer
  ) {
    this.providerFactory = providerFactory;
    this.repositoryFactory = repositoryFactory;
    this.filterer = filterer;
  }
  providerFactory: ProviderFactory;
  repositoryFactory: RepositoryFactory<ITransaction, ITransactionFilter>;
  filterer: ConvertFilterer;

  /**
   * Get Filtered Transactions
   * @param {ITransactionFilter} filter Conversion Filter
   * @returns {ITransactionDto[]}
   */
  findConversions(filter: ITransactionFilter): ITransactionDto[] {
    const repository = this.repositoryFactory.createRepository(this.filterer);
    const transactions = repository.find(filter);
    const mappedResult = transactions.map((t) => ({
      id: t.id,
      amount: t.to.amount,
    }));
    return mappedResult;
  }

  /**
   * Convert currency
   * @param {string} fromCurrency From Currency
   * @param {string} toCurrency To Currency
   * @param {number} fromAmount From Amount
   * @returns {Promise<ITransactionDto>}
   */
  async createConversion(
    fromCurrency: string,
    toCurrency: string,
    fromAmount: number
  ): Promise<ITransactionDto> {
    const repository = this.repositoryFactory.createRepository(this.filterer);
    const provider = this.providerFactory.createProvider();
    const toAmount = await provider.convert(
      fromCurrency,
      toCurrency,
      fromAmount
    );
    const transactionId = randomUUID();
    const transaction: ITransaction = {
      id: transactionId,
      date: new Date(),
      from: {
        currency: fromCurrency,
        amount: fromAmount,
      },
      to: {
        currency: toCurrency,
        amount: toAmount,
      },
    };
    repository.add(transaction);
    return {
      id: transactionId,
      amount: toAmount,
    };
  }
}
