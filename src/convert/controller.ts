import { randomUUID } from 'crypto';
import { Container } from 'typedi';
import { ProviderFactory } from '../provider';
import { ITransaction, ITransactionDto, ITransactionFilter } from './model';
import * as repository from './repository';

/**
 * Get Filtered Transactions
 * @param {ITransactionFilter} filter Conversion Filter
 * @returns {ITransactionDto[]}
 */
export function conversions(filter: ITransactionFilter): ITransactionDto[] {
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
  const factory = Container.get(ProviderFactory);
  const provider = factory.createProvider();
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
