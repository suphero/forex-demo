import { Service } from 'typedi';
import { BaseProvider, ExchangeRatesProvider, FixerProvider } from '.';
import { ProviderType } from '../helpers/constants';
import { NotImplementedError } from '../helpers/errors';

/**
 * Exchange Rate Provider Factory
 */
@Service()
export class ProviderFactory {
  /**
   * Create Exchange Rate Provider
   * @returns {BaseProvider}
   */
  createProvider = (): BaseProvider => {
    const provider = process.env.PROVIDER || ProviderType.EXCHANGERATES;
    if (provider === ProviderType.EXCHANGERATES) {
      const apiKey = process.env.EXCHANGERATES_API_KEY || '';
      const isPremium =
        process.env.EXCHANGERATES_PREMIUM_PLAN === 'true' || false;
      return new ExchangeRatesProvider(apiKey, isPremium);
    } else if (provider === ProviderType.FIXER) {
      const apiKey = process.env.FIXER_API_KEY || '';
      return new FixerProvider(apiKey);
    } else {
      throw new NotImplementedError('Not Implemented Provider');
    }
  };
}
