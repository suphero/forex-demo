import { describe, it, beforeEach } from 'mocha';
import { expect } from 'chai';
import request from 'supertest';
import Container from 'typedi';
import { StatusCodes } from 'http-status-codes';
import { App } from '../src/app';
import { ProviderType } from '../src/lib/helpers/constants';
import * as helper from './helper';

const { app } = Container.get(App);

describe('Exchange Rate API', () => {
  beforeEach(() => {
    helper.clearEnvironmentVariables();
  });

  it('SHOULD throw WHEN missing query parameters', async () => {
    const response = await request(app).get('/exchange');
    expect(response.statusCode).equal(StatusCodes.BAD_REQUEST);
  });

  it('SHOULD throw WHEN provider is invalid', async () => {
    process.env.PROVIDER = 'TEST';
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.NOT_IMPLEMENTED);
  });

  it('SHOULD throw WHEN ER Api Key is missing', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.INSUFFICIENT_STORAGE);
  });

  it('SHOULD respond WHEN ER Free Api Key exists', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    helper.erLatestRepliedNock('EUR', 'USD', 1.2345);
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.rate).equal(1.2345);
  });

  it('SHOULD respond WHEN ER Premium Api Key exists', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    helper.erLatestRepliedNock('EUR', 'USD', 1.2345, true);
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.rate).equal(1.2345);
  });

  it('SHOULD throw WHEN ER requires upgrade', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    helper
      .erLatestNock('EUR', 'USD')
      .reply(StatusCodes.OK, helper.ER_UPGRADE_BODY);
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });

  it('SHOULD throw WHEN FX Api Key is missing', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.INSUFFICIENT_STORAGE);
  });

  it('SHOULD respond WHEN FX Api Key exists', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = helper.FX_API_KEY;
    helper.fxLatestRepliedNock('EUR', 'USD', 1.2345);
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.rate).equal(1.2345);
  });

  it('SHOULD throw WHEN FX requires upgrade', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = helper.FX_API_KEY;
    helper
      .fxLatestNock('EUR', 'USD')
      .reply(StatusCodes.OK, helper.FX_UPGRADE_BODY);
    const response = await helper.exchangeRequest('EUR', 'USD');
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });
});
