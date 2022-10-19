import nock from 'nock';
import request from 'supertest';
import Container from 'typedi';
import {
  ExchangeRatesFreeApiBaseUrl,
  ExchangeRatesPremiumApiBaseUrl,
  FixerApiBaseUrl,
} from '../src/lib/helpers/constants';
import { App } from '../src/app';
import { StatusCodes } from 'http-status-codes';

const { app } = Container.get(App);

export const ER_API_KEY = 'ER_KEY';
export const FX_API_KEY = 'FX_KEY';

export const ER_UPGRADE_BODY = {
  success: false,
  error: {
    code: 104,
    info: 'Your monthly API request volume has been reached. Please upgrade your plan.',
  },
};

export const FX_UPGRADE_BODY = {
  success: false,
  error: {
    code: 104,
    info: 'Your monthly API request volume has been reached. Please upgrade your plan.',
  },
};

/**
 * Clear process.env variables
 */
export function clearEnvironmentVariables() {
  process.env.PROVIDER = '';
  process.env.EXCHANGERATES_API_KEY = '';
  process.env.EXCHANGERATES_PREMIUM_PLAN = '';
  process.env.FIXER_API_KEY = '';
  process.env.REPOSITORY = '';
  process.env.REPOSITORY_FILE_PATH = '';
}

/**
 * Get Exchange Rates Latest Nock
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @param premium Is Premium (Default false)
 * @returns nock
 */
export function erLatestNock(
  base: string,
  symbol: string,
  premium: boolean = false
) {
  const baseUrl = premium
    ? ExchangeRatesPremiumApiBaseUrl
    : ExchangeRatesFreeApiBaseUrl;
  return nock(baseUrl).get(
    `/latest?access_key=${ER_API_KEY}&base=${base}&symbols=${symbol}`
  );
}

/**
 * Get Exchange Rates Latest Nock Body
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @param rate Symbol Rate
 * @returns nock body
 */
export function erLatestBody(base: string, symbol: string, rate: number) {
  return {
    success: true,
    timestamp: 1519296206,
    base,
    date: '2021-03-17',
    rates: {
      [symbol]: rate,
    },
  };
}

/**
 * Get Exchange Rates Latest Replied Nock
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @param rate Symbol Rate
 * @param premium Is Premium (Default false)
 * @returns nock
 */
export function erLatestRepliedNock(
  base: string,
  symbol: string,
  rate: number,
  premium: boolean = false
) {
  const nock = erLatestNock(base, symbol, premium);
  const body = erLatestBody(base, symbol, rate);
  return nock.reply(StatusCodes.OK, body);
}

/**
 * Get Exchange Rates Convert Nock
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @returns nock
 */
export function erConvertNock(from: string, to: string, amount: number) {
  return nock(ExchangeRatesPremiumApiBaseUrl).get(
    `/convert?access_key=${ER_API_KEY}&from=${from}&to=${to}&amount=${amount}`
  );
}

/**
 * Get Exchange Rates Convert Nock Body
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @param result To Amount
 * @returns nock body
 */
export function erConvertBody(
  from: string,
  to: string,
  amount: number,
  result: number
) {
  return {
    success: true,
    query: { from, to, amount },
    info: {
      timestamp: 1519328414,
      rate: 148.972231,
    },
    historical: '',
    date: '2018-02-22',
    result,
  };
}

/**
 * Get Exchange Rates Convert Replied Nock
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @param result To Amount
 * @returns nock
 */
export function erConvertRepliedNock(
  from: string,
  to: string,
  amount: number,
  result: number
) {
  const nock = erConvertNock(from, to, amount);
  const body = erConvertBody(from, to, amount, result);
  return nock.reply(StatusCodes.OK, body);
}

/**
 * Get Fixer Latest Nock
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @returns nock
 */
export function fxLatestNock(base: string, symbol: string) {
  return nock(FixerApiBaseUrl).get(`/latest?base=${base}&symbols=${symbol}`);
}

/**
 * Get Fixer Latest Nock Body
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @param rate Symbol Rate
 * @returns nock body
 */
export function fxLatestBody(base: string, symbol: string, rate: number) {
  return {
    success: true,
    timestamp: 1519296206,
    base,
    date: '2022-10-17',
    rates: {
      [symbol]: rate,
    },
  };
}

/**
 * Get Fixer Latest Replied Nock
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @param rate Symbol Rate
 * @returns nock
 */
export function fxLatestRepliedNock(
  base: string,
  symbol: string,
  rate: number
) {
  const nock = fxLatestNock(base, symbol);
  const body = fxLatestBody(base, symbol, rate);
  return nock.reply(StatusCodes.OK, body);
}

/**
 * Get Fixer Convert Nock
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @returns nock
 */
export function fxConvertNock(from: string, to: string, amount: number) {
  return nock(FixerApiBaseUrl).get(
    `/convert?from=${from}&to=${to}&amount=${amount}`
  );
}

/**
 * Get Fixer Convert Nock Body
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @param result To Amount
 * @returns nock body
 */
export function fxConvertBody(
  from: string,
  to: string,
  amount: number,
  result: number
) {
  return {
    success: true,
    query: { from, to, amount },
    info: {
      timestamp: 1519328414,
      rate: 148.972231,
    },
    historical: '',
    date: '2018-02-22',
    result,
  };
}

/**
 * Get Fixer Convert Replied Nock
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @param result To Amount
 * @returns nock
 */
export function fxConvertRepliedNock(
  from: string,
  to: string,
  amount: number,
  result: number
) {
  const nock = fxConvertNock(from, to, amount);
  const body = fxConvertBody(from, to, amount, result);
  return nock.reply(StatusCodes.OK, body);
}

/**
 * Exchange API supertest request
 * @param base Base Currency
 * @param symbol Symbol Currency
 * @returns Response
 */
export function exchangeRequest(base: string, symbol: string) {
  return request(app).get(`/exchange?base=${base}&symbol=${symbol}`);
}

/**
 * Conversion API supertest request
 * @param from From Currency
 * @param to To Currency
 * @param amount From Amount
 * @returns Response
 */
export function conversionRequest(from: string, to: string, amount: number) {
  return request(app).post('/convert').send({ from, to, amount });
}

/**
 * Conversion API supertest request
 * @param filter Query Filter
 * @returns Response
 */
export function conversionListRequest(filter?: Record<string, string>) {
  const params = new URLSearchParams(filter).toString();
  return request(app).get(`/convert?${params}`);
}
