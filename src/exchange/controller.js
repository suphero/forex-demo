import { ProviderFactory } from '../provider/index.js';

/**
 * Get Latest Exchange Rate
 * @param {string} base Base Symbol
 * @param {string} symbol Quote Symbol
 * @returns {Promise<number>}
 */
export async function exchange(base, symbol) {
  const factory = new ProviderFactory();
  const provider = factory.createProvider();
  const rate = await provider.latest(base, symbol);
  return rate;
}
