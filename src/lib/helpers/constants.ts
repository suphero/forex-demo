export const ExchangeRatesFreeApiBaseUrl = 'http://api.exchangeratesapi.io/v1';
export const ExchangeRatesPremiumApiBaseUrl =
  'https://api.exchangeratesapi.io/v1';
export const FixerApiBaseUrl = 'https://api.apilayer.com/fixer';

/**
 * Provider Types
 */
export enum ProviderType {
  EXCHANGERATES = 'ER',
  FIXER = 'FX',
}

/**
 * Repository Types
 */
export enum RepositoryType {
  MEMORY = 'RAM',
  JSON = 'JSON',
}
