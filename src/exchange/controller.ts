import { Container } from 'typedi';
import { ProviderFactory } from '../provider';

/**
 * Get Latest Exchange Rate
 * @param {string} base Base Symbol
 * @param {string} symbol Quote Symbol
 * @returns {Promise<number>}
 */
export function exchange(base: string, symbol: string): Promise<number> {
  const factory = Container.get(ProviderFactory);
  const provider = factory.createProvider();
  return provider.latest(base, symbol);
}
