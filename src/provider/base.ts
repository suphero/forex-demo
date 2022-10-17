import { NotImplementedError } from '../helpers/errors';

/**
 * Exchange Rate Base Provider
 */
export abstract class BaseProvider {
  /**
   * Get Latest Exchange Rate
   * @param {string} base symbol
   * @param {string} symbol
   * @returns {Promise<number>}
   */
  abstract latest(base: string, symbol: string): Promise<number>;
  /**
   * Convert exchange
   * @param {string} from symbol
   * @param {string} to symbol
   * @param {number} amount
   * @returns {Promise<number>}
   */
  abstract convert(from: string, to: string, amount: number): Promise<number>;
}
