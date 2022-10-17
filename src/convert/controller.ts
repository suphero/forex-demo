import { randomUUID } from 'crypto';
import { Container } from 'typedi';
import { ProviderFactory } from '../lib/provider';
import { ITransaction, ITransactionDto, ITransactionFilter } from './model';
import { ConvertFilterer } from './filterer';
import { RepositoryFactory } from '../lib/repository/factory';

/**
 * Get Filtered Transactions
 * @param {ITransactionFilter} filter Conversion Filter
 * @returns {ITransactionDto[]}
 */
export function conversions(filter: ITransactionFilter): ITransactionDto[] {
  const repositoryFactory = Container.get(
    RepositoryFactory<ITransaction, ITransactionFilter>
  );
  const filterer = Container.get(ConvertFilterer);
  const repository = repositoryFactory.createRepository(filterer);
  const transactions = repository.find(filter);
  const mappedResult = transactions.map((t) => {
    return {
      id: t.id,
      amount: t.to.amount,
    };
  });
  return mappedResult;
}

/**
 * Convert currency
 * @param {string} fromCurrency From Currency
 * @param {string} toCurrency To Currency
 * @param {number} fromAmount From Amount
 * @returns {Promise<ITransactionDto>}
 */
export async function convert(
  fromCurrency: string,
  toCurrency: string,
  fromAmount: number
): Promise<ITransactionDto> {
  const repositoryFactory = Container.get(RepositoryFactory);
  const filterer = Container.get(ConvertFilterer);
  const repository = repositoryFactory.createRepository(filterer);
  const providerFactory = Container.get(ProviderFactory);
  const provider = providerFactory.createProvider();
  const toAmount = await provider.convert(fromCurrency, toCurrency, fromAmount);
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
