import { describe, it } from 'mocha';
import request from 'supertest';
import Container from 'typedi';
import { StatusCodes } from 'http-status-codes';
import { App } from '../src/app';

const { app } = Container.get(App);

describe('GET /invalid', () => {
  it('SHOULD throw WHEN invalid url requested', (done) => {
    request(app).get('/invalid').expect(StatusCodes.NOT_FOUND, done);
  });
});
