import { describe, it, beforeEach } from 'mocha';
import request from 'supertest';
import nock from 'nock';
import { StatusCodes } from 'http-status-codes';
import app from '../../src/app';
import {
  ExchangeRatesFreeApiBaseUrl,
  ExchangeRatesPremiumApiBaseUrl,
  FixerApiBaseUrl,
  ProviderType,
} from '../../src/lib/helpers/constants';

describe('GET /exchange', () => {
  beforeEach(() => {
    process.env.PROVIDER = '';
    process.env.EXCHANGERATES_API_KEY = '';
    process.env.EXCHANGERATES_PREMIUM_PLAN = '';
    process.env.FIXER_API_KEY = '';
  });

  it('missing query parameter', (done) => {
    request(app).get('/exchange').expect(StatusCodes.BAD_REQUEST, done);
  });

  it('invalid provider', (done) => {
    process.env.PROVIDER = 'TEST';
    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.NOT_IMPLEMENTED, done);
  });

  it('missing exchangeratesapi api key', (done) => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.INSUFFICIENT_STORAGE, done);
  });

  it('valid exchangeratesapi free input', (done) => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    nock(ExchangeRatesFreeApiBaseUrl)
      .get('/latest?access_key=ER_KEY&base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: true,
        base: 'EUR',
        rates: { USD: 1.2345 },
      });

    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.OK, { rate: 1.2345 }, done);
  });

  it('valid exchangeratesapi premium input', (done) => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    nock(ExchangeRatesPremiumApiBaseUrl)
      .get('/latest?access_key=ER_KEY&base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: true,
        base: 'EUR',
        rates: { USD: 1.2345 },
      });

    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.OK, { rate: 1.2345 }, done);
  });

  it('failed exchangerates api input', (done) => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    nock(ExchangeRatesFreeApiBaseUrl)
      .get('/latest?access_key=ER_KEY&base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: false,
        error: {
          info: 'Your monthly API request volume has been reached. Please upgrade your plan.',
        },
      });

    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.FAILED_DEPENDENCY, done);
  });

  it('missing fixer api key', (done) => {
    process.env.PROVIDER = ProviderType.FIXER;
    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.INSUFFICIENT_STORAGE, done);
  });

  it('valid fixer input', (done) => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = 'FX_KEY';
    nock(FixerApiBaseUrl)
      .get('/latest?base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: true,
        base: 'EUR',
        rates: { USD: 1.2345 },
      });

    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.OK, { rate: 1.2345 }, done);
  });

  it('failed fixer api input', (done) => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = 'FX_KEY';
    nock(FixerApiBaseUrl)
      .get('/latest?base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: false,
        error: {
          info: 'Your monthly API request volume has been reached. Please upgrade your plan.',
        },
      });

    request(app)
      .get('/exchange?base=EUR&symbol=USD')
      .expect(StatusCodes.FAILED_DEPENDENCY, done);
  });
});
