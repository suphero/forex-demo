import { BaseProvider, ExchangeRatesProvider, FixerProvider } from './index.js';
import { NotImplementedError } from '../helpers/errors.js';

/**
 * Exchange Rate Provider Factory
 */
export class ProviderFactory {
  /**
   * Create Exchange Rate Provider
   * @returns {BaseProvider}
   */
  createProvider = () => {
    const provider = process.env.PROVIDER || 'ER';
    if (provider === "ER") {
      const apiKey = process.env.EXCHANGERATES_API_KEY;
      const isPremium = process.env.EXCHANGERATES_PREMIUM_PLAN === 'true' || false;
      return new ExchangeRatesProvider(apiKey, isPremium);
    } else if (provider === "FX") {
      const apiKey = process.env.FIXER_API_KEY;
      return new FixerProvider(apiKey);
    } else {
      throw new NotImplementedError('Not Implemented Provider');
    }
  }
}
