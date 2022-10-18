import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiAlmost from 'chai-almost';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
import app from '../src/app';
import { ProviderType } from '../src/lib/helpers/constants';
import * as helper from './helper';

chai.use(chaiAlmost());

describe('Conversion API', () => {
  beforeEach(() => {
    helper.clearEnvironmentVariables();
  });

  it('SHOULD throw WHEN missing query parameters', async () => {
    const response = await request(app).post('/convert');
    expect(response.statusCode).equal(StatusCodes.BAD_REQUEST);
  });

  it('SHOULD throw WHEN provider is invalid', async () => {
    process.env.PROVIDER = 'TEST';
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.NOT_IMPLEMENTED);
  });

  it('SHOULD throw WHEN ER Api Key is missing', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.INSUFFICIENT_STORAGE);
  });

  it('SHOULD respond WHEN ER Free Api Key exists', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    helper.erLatestRepliedNock('EUR', 'USD', 1.11);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).almost.equal(5.55);
  });

  it('SHOULD respond WHEN provider not specified', async () => {
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    helper.erLatestRepliedNock('EUR', 'USD', 1.11);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).almost.equal(5.55);
  });

  it('SHOULD respond WHEN ER Premium Api Key exists', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    helper.erConvertRepliedNock('EUR', 'USD', 5, 5.55);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).equal(5.55);
  });

  it('SHOULD respond WHEN json repository selected', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'tests/temp/db.json';
    helper.erConvertRepliedNock('EUR', 'USD', 5, 5.55);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).equal(5.55);
    fs.rmSync('tests/temp', { recursive: true, force: true });
  });

  it('SHOULD throw WHEN ER Free version requires upgrade', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    helper
      .erLatestNock('EUR', 'USD')
      .reply(StatusCodes.OK, helper.ER_UPGRADE_BODY);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });

  it('SHOULD throw WHEN ER Premium version requires upgrade', async () => {
    process.env.PROVIDER = ProviderType.EXCHANGERATES;
    process.env.EXCHANGERATES_API_KEY = helper.ER_API_KEY;
    process.env.EXCHANGERATES_PREMIUM_PLAN = 'true';
    helper
      .erConvertNock('EUR', 'USD', 5)
      .reply(StatusCodes.OK, helper.ER_UPGRADE_BODY);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });

  it('SHOULD throw WHEN FX Api Key is missing', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.INSUFFICIENT_STORAGE);
  });

  it('SHOULD respond WHEN FX Api Key exists', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = helper.FX_API_KEY;
    helper.fxConvertRepliedNock('EUR', 'USD', 5, 5.55);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body.amount).equal(5.55);
  });

  it('SHOULD throw WHEN FX requires upgrade', async () => {
    process.env.PROVIDER = ProviderType.FIXER;
    process.env.FIXER_API_KEY = helper.FX_API_KEY;
    helper
      .fxConvertNock('EUR', 'USD', 5)
      .reply(StatusCodes.OK, helper.FX_UPGRADE_BODY);
    const response = await helper.conversionRequest('EUR', 'USD', 5);
    expect(response.statusCode).equal(StatusCodes.FAILED_DEPENDENCY);
  });
});

describe('Conversion List API', () => {
  beforeEach(() => {
    helper.clearEnvironmentVariables();
  });

  it('SHOULD throw WHEN missing id and date', async () => {
    const response = await helper.conversionListRequest();
    expect(response.statusCode).equal(StatusCodes.BAD_REQUEST);
  });

  it('SHOULD throw WHEN only id specified', async () => {
    const response = await helper.conversionListRequest({ id: '123' });
    expect(response.statusCode).equal(StatusCodes.OK);
  });

  it('SHOULD throw WHEN only date specified', async () => {
    const response = await helper.conversionListRequest({ date: '2022-10-17' });
    expect(response.statusCode).equal(StatusCodes.OK);
  });

  it('SHOULD respond WHEN repository is invalid', async () => {
    process.env.REPOSITORY = 'TEST';
    const response = await helper.conversionListRequest({ id: '123' });
    expect(response.statusCode).equal(StatusCodes.NOT_IMPLEMENTED);
  });

  it('SHOULD throw WHEN JSON file name is missing', async () => {
    process.env.REPOSITORY = 'JSON';
    const response = await helper.conversionListRequest({ id: '123' });
    expect(response.statusCode).equal(StatusCodes.INSUFFICIENT_STORAGE);
  });

  it('SHOULD respond WHEN data exists with id filter', async () => {
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'tests/data/db.json';
    const response = await helper.conversionListRequest({
      id: '3c5fddc7-c535-4b09-b7f1-8c112bb117a6',
    });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body).lengthOf(1);
  });

  it('SHOULD respond WHEN data exists with date filter', async () => {
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'tests/data/db.json';
    const response = await helper.conversionListRequest({ date: '2022-10-17' });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body).lengthOf(2);
  });

  it('SHOULD respond WHEN JSON file does not exist', async () => {
    process.env.REPOSITORY = 'JSON';
    process.env.REPOSITORY_FILE_PATH = 'tests/data/db2.json';
    const response = await helper.conversionListRequest({ id: '123' });
    expect(response.statusCode).equal(StatusCodes.OK);
    expect(response.body).lengthOf(0);
  });
});
