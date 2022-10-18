import { describe, it } from 'mocha';
import request from 'supertest';
import { StatusCodes } from 'http-status-codes';
import app from '../src/app';

describe('GET /invalid', () => {
  it('SHOULD throw WHEN invalid url requested', (done) => {
    request(app).get('/invalid').expect(StatusCodes.NOT_FOUND, done);
  });
});
