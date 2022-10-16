import { randomUUID } from "crypto";
import { ProviderFactory } from '../provider/index.js';
import * as repository from './repository.js';

/**
 * Get Filtered Transactions
 * @param {any} filter Conveersion Filter
 * @returns Transaction array
 */
export function conversions(filter) {
  const transactions = repository.find(filter);
  const mappedResult = transactions.map(t => {
    return {
      id: t.id,
      amount: t.to.amount
    }
  })
  return mappedResult;
}

/**
 * Convert currency
 * @param {string} from From Currency
 * @param {string} to To Currency
 * @param {number} amount From Amount
 * @returns {Promise<any>}
 */
export async function convert(from, to, amount) {
  const factory = new ProviderFactory();
  const provider = factory.createProvider();
  const result = await provider.convert(from, to, amount);
  const transactionId = randomUUID();
  const transaction = {
    id: transactionId,
    date: new Date(),
    from: {
      currency: from,
      amount
    },
    to: {
      currency: to,
      amount: result
    }
  };
  repository.add(transaction);
  return {
    id: transactionId,
    amount: result
  };
}