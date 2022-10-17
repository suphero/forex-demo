export const ExchangeRatesFreeApiBaseUrl = 'http://api.exchangeratesapi.io/v1';
export const ExchangeRatesPremiumApiBaseUrl =
  'https://api.exchangeratesapi.io/v1';
export const FixerApiBaseUrl = 'https://api.apilayer.com/fixer';

export enum Provider {
  EXCHANGERATES = 'ER',
  FIXER = 'FX',
}

export enum RepositoryType {
  MEMORY = 'RAM',
  JSON = 'JSON',
}
