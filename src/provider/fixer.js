import axios from 'axios';
import { BaseProvider } from './index.js';
import {
  ExternalApiError,
  MissingConfigurationError,
} from '../helpers/errors.js';

/**
 * fixer.io provider
 */
export class FixerProvider extends BaseProvider {
  /**
   * Constructor
   * @param {string} apiKey
   */
  constructor(apiKey) {
    super();
    if (!apiKey) {
      throw new MissingConfigurationError('Api Key is missing');
    }
    this.apiKey = apiKey;
  }

  baseUrl = 'https://api.apilayer.com/fixer';

  /**
   * Get Latest Exchange Rate
   * @param {string} base symbol
   * @param {string} symbol
   * @returns {Promise<number>}
   */
  async latest(base, symbol) {
    const url = `${this.baseUrl}/latest?base=${base}&symbols=${symbol}`;
    const options = { headers: { apiKey: this.apiKey } };
    const response = await axios.get(url, options);
    const jsonData = response.data;
    if (jsonData.success !== true) {
      throw new ExternalApiError(jsonData.error.info);
    }
    return jsonData.rates[symbol];
  }

  /**
   * Convert exchange
   * @param {string} from symbol
   * @param {string} to symbol
   * @param {Promise<number>} amount
   */
  async convert(from, to, amount) {
    const url = `${this.baseUrl}/convert?from=${from}&to=${to}&amount=${amount}`;
    const options = { headers: { apiKey: this.apiKey } };
    const response = await axios.get(url, options);
    const jsonData = response.data;
    if (jsonData.success !== true) {
      throw new ExternalApiError(jsonData.error.info);
    }
    return jsonData.result;
  }
}
