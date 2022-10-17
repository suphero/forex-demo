// import { describe, it } from 'mocha';
import request from 'supertest';
import nock from 'nock';
import app from '../app.js';

describe('POST /conversion', () => {
  beforeEach(() => {
    process.env.PROVIDER = '';
    process.env.EXCHANGERATES_API_KEY = '';
    process.env.EXCHANGERATES_PREMIUM_PLAN = '';
    process.env.FIXER_API_KEY = '';
  })

  it('missing query parameter', (done) => {
    request(app).post('/conversion').expect(400, done);
  });

  it('missing exchangeratesapi api key', (done) => {
    process.env.PROVIDER = 'ER';
    request(app).post('/conversion').send({ from: 'EUR', to: 'USD', amount: 5 }).expect(507, done);
  });

  it('valid exchangeratesapi free input', (done) => {
    process.env.PROVIDER = 'ER';
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    nock('http://api.exchangeratesapi.io/v1')
      .get('/latest?access_key=ER_KEY&base=EUR&symbols=USD')
      .reply(200, {
        success: true,
        base: 'EUR',
        rates: { USD: 1.11 }
      });

    request(app).post('/conversion').send({ from: 'EUR', to: 'USD', amount: 5 }).expect(200, { rate: 5.55 }, done);
  });

  it('valid exchangeratesapi premium input', (done) => {
    process.env.PROVIDER = 'ER';
    process.env.EXCHANGERATES_API_KEY = 'ER_KEY';
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    nock('https://api.exchangeratesapi.io/v1')
      .get('/convert?access_key=ER_KEY&from=EUR&to=USD&amount=5')
      .reply(200, {
        success: true,
        base: 'EUR',
        rates: { USD: 5.55 }
      });

    request(app).post('/conversion').send({ from: 'EUR', to: 'USD', amount: 5 }).expect(200, { rate: 5.55 }, done);
  });

  it('missing fixer api key', (done) => {
    process.env.PROVIDER = 'FX';
    request(app).post('/conversion').send({ from: 'EUR', to: 'USD', amount: 5 }).expect(507, done);
  });

  it('valid fixer input', (done) => {
    process.env.PROVIDER = 'FX';
    process.env.FIXER_API_KEY = 'FX_KEY';
    nock('https://api.apilayer.com/fixer')
      .get('/convert?from=EUR&to=USD&amount=5')
      .reply(200, {
        success: true,
        base: 'EUR',
        rates: { USD: 5.55 }
      });

    request(app).post('/conversion').send({ from: 'EUR', to: 'USD', amount: 5 }).expect(200, { rate: 5.55 }, done);
  });
});
