import axios from 'axios';
import { BaseProvider } from '.';
import {
  ExchangeRatesFreeApiBaseUrl,
  ExchangeRatesPremiumApiBaseUrl,
} from '../helpers/constants';
import { ExternalApiError, MissingConfigurationError } from '../helpers/errors';

/**
 * exchangeratesapi.io provider
 */
export class ExchangeRatesProvider extends BaseProvider {
  /**
   * Constructor
   * @param {string} apiKey
   * @param {boolean} isPremium
   */
  constructor(apiKey: string, isPremium: boolean) {
    super();
    if (!apiKey) {
      throw new MissingConfigurationError('Api Key is missing');
    }
    this.apiKey = apiKey;
    this.isPremium = isPremium;
    if (isPremium) {
      this.baseUrl = ExchangeRatesPremiumApiBaseUrl;
    } else {
      this.baseUrl = ExchangeRatesFreeApiBaseUrl;
    }
  }

  apiKey: string;
  isPremium: boolean;
  baseUrl: string;

  /**
   * Get Latest Exchange Rate
   * @param {string} base symbol
   * @param {string} symbol
   * @returns {Promise<number>}
   */
  async latest(base: string, symbol: string): Promise<number> {
    const url = `${this.baseUrl}/latest?access_key=${this.apiKey}&base=${base}&symbols=${symbol}`;
    const response = await axios.get(url);
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
  async convert(from: string, to: string, amount: number) {
    if (this.isPremium) {
      return this.convertPremium(from, to, amount);
    } else {
      return this.convertFree(from, to, amount);
    }
  }

  /**
   * Convert exchange via API. Free version doesn't support this endpoint
   * @param {string} from symbol
   * @param {string} to symbol
   * @param {number} amount
   * @param {Promise<number>} amount
   */
  async convertPremium(from: string, to: string, amount: number) {
    const url = `${this.baseUrl}/convert?access_key=${this.apiKey}&from=${from}&to=${to}&amount=${amount}`;
    const response = await axios.get(url);
    const jsonData = response.data;
    if (jsonData.success !== true) {
      throw new ExternalApiError(jsonData.error.info);
    }
    return jsonData.result;
  }

  /**
   * Convert exchange via latest endpoint
   * @param {string} from symbol
   * @param {string} to symbol
   * @param {number} amount
   * @param {Promise<number>} amount
   */
  async convertFree(from: string, to: string, amount: number) {
    const rate = await this.latest(from, to);
    return rate * amount;
  }
}
