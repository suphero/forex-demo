import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiAlmost from 'chai-almost';
import request from 'supertest';
import nock from 'nock';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
import app from '../../src/app';
import {
  ExchangeRatesFreeApiBaseUrl,
  ExchangeRatesPremiumApiBaseUrl,
  FixerApiBaseUrl,
  ProviderType,
} from '../../src/lib/helpers/constants';

chai.use(chaiAlmost());

describe('GET /convert', () => {
  beforeEach(() => {
    process.env.REPOSITORY = '';
    process.env.REPOSITORY_FILE_PATH = '';
  });

  it('missing input', (done) => {
    request(app).get('/convert').expect(StatusCodes.BAD_REQUEST, done);
  });

  it('id only input', (done) => {
    request(app).get('/convert?id=123').expect(StatusCodes.OK, done);
  });

  it('date only input', (done) => {
    request(app).get('/convert?date=2022-10-17').expect(StatusCodes.OK, done);
  });

  it('invalid repository', (done) => {
    process.env.REPOSITORY = 'TEST';
    request(app)
      .get('/convert?id=123')
      .expect(StatusCodes.NOT_IMPLEMENTED, done);
  });

  it('missing json file', (done) => {
    process.env.REPOSITORY = 'JSON';
    request(app)
      .get('/convert?id=123')
      .expect(StatusCodes.INSUFFICIENT_STORAGE, done);
  });

  it('json repository id filter', async () => {
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'data/db.json';
    const response = await request(app).get(
      '/convert?id=3c5fddc7-c535-4b09-b7f1-8c112bb117a6'
    );
    expect(response.statusCode).equal(200);
    expect(response.body).lengthOf(1);
  });

  it('json repository date filter', async () => {
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'data/db.json';
    const response = await request(app).get('/convert?date=2022-10-17');
    expect(response.statusCode).equal(200);
    expect(response.body).lengthOf(2);
  });

  it('json repository missing file', async () => {
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'data/db2.json';
    const response = await request(app).get('/convert?id=123');
    expect(response.statusCode).equal(200);
    expect(response.body).lengthOf(0);
  });
});

describe('POST /convert', () => {
  beforeEach(() => {
    process.env.PROVIDER = '';
    process.env.EXCHANGERATES_API_KEY = '';
    process.env.EXCHANGERATES_PREMIUM_PLAN = '';
    process.env.FIXER_API_KEY = '';
    process.env.REPOSITORY = '';
    process.env.REPOSITORY_FILE_PATH = '';
  });

  it('missing query parameter', (done) => {
    request(app).post('/convert').expect(StatusCodes.BAD_REQUEST, done);
  });

  it('invalid provider', (done) => {
    process.env.PROVIDER = 'TEST';
    request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 })
      .expect(StatusCodes.NOT_IMPLEMENTED, done);
  });

  it('missing exchangeratesapi api key', (done) => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 })
      .expect(StatusCodes.INSUFFICIENT_STORAGE, done);
  });

  it('valid exchangeratesapi free input', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    nock(ExchangeRatesFreeApiBaseUrl)
      .get('/latest?access_key=ER_KEY&base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: true,
        rates: { USD: 1.11 },
      });

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).almost.equal(5.55);
  });

  it('default provider free input', async () => {
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    nock(ExchangeRatesFreeApiBaseUrl)
      .get('/latest?access_key=ER_KEY&base=EUR&symbols=USD')
      .reply(StatusCodes.OK, {
        success: true,
        rates: { USD: 1.11 },
      });

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).almost.equal(5.55);
  });

  it('valid exchangeratesapi premium input', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    nock(ExchangeRatesPremiumApiBaseUrl)
      .get('/convert?access_key=ER_KEY&from=EUR&to=USD&amount=5')
      .reply(StatusCodes.OK, {
        success: true,
        result: 5.55,
      });

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).equal(5.55);
  });

  it('valid exchangeratesapi premium input json file', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'tests/convert/temp/db.json';
    nock(ExchangeRatesPremiumApiBaseUrl)
      .get('/convert?access_key=ER_KEY&from=EUR&to=USD&amount=5')
      .reply(StatusCodes.OK, {
        success: true,
        result: 5.55,
      });

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).equal(5.55);
    fs.rmSync('tests/convert/temp', { recursive: true, force: true });
  });

  it('failed exchangerates api free input', async () => {
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

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });

  it('failed exchangerates api premium input', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    nock(ExchangeRatesPremiumApiBaseUrl)
      .get('/convert?access_key=ER_KEY&from=EUR&to=USD&amount=5')
      .reply(StatusCodes.OK, {
        success: false,
        error: {
          info: 'Your monthly API request volume has been reached. Please upgrade your plan.',
        },
      });

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });

  it('missing fixer api key', (done) => {
    process.env.PROVIDER = ProviderType.FIXER;
    request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 })
      .expect(StatusCodes.INSUFFICIENT_STORAGE, done);
  });

  it('valid fixer input', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = 'FX_KEY';
    nock(FixerApiBaseUrl)
      .get('/convert?from=EUR&to=USD&amount=5')
      .reply(StatusCodes.OK, {
        success: true,
        result: 5.55,
      });
    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).equal(5.55);
  });

  it('failed fixer api input', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = 'FX_KEY';
    nock(FixerApiBaseUrl)
      .get('/convert?from=EUR&to=USD&amount=5')
      .reply(StatusCodes.OK, {
        success: false,
        error: {
          info: 'Your monthly API request volume has been reached. Please upgrade your plan.',
        },
      });

    const response = await request(app)
      .post('/convert')
      .send({ from: 'EUR', to: 'USD', amount: 5 });
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });
});
