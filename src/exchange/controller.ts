import { Service } from 'typedi';
import { ProviderFactory } from '../lib/provider';

/**
 * Exchange Controller
 */
@Service()
export class ExchangeController {
  /**
   * Exchange Controller Constructor
   */
  constructor(providerFactory: ProviderFactory) {
    this.providerFactory = providerFactory;
  }
  providerFactory: ProviderFactory;

  /**
   * Get Latest Exchange Rate
   * @param {string} base Base Symbol
   * @param {string} symbol Quote Symbol
   * @returns {Promise<number>}
   */
  exchange(base: string, symbol: string): Promise<number> {
    const provider = this.providerFactory.createProvider();
    return provider.latest(base, symbol);
  }
}
