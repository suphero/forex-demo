import { NotImplementedError } from '../helpers/errors.js';

/**
 * Exchange Rate Base Provider
 */
export class BaseProvider {
  /**
   * Get Latest Exchange Rate
   * @param {string} base symbol
   * @param {string} symbol
   * @returns {Promise<number>}
   */
  async latest(base, symbol) {
    throw new NotImplementedError();
  }
  /**
   * Convert exchange
   * @param {string} from symbol
   * @param {string} to symbol
   * @param {number} amount
   * @returns {Promise<number>}
   */
  async convert(from, to, amount) {
    throw new NotImplementedError();
  }
}
