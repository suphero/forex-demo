import { describe, it } from 'mocha';
import { expect } from 'chai';
import http, { Server } from 'http';
import { StatusCodes } from 'http-status-codes';

describe('Server', () => {
  let server: Server;
  before(() => {
    process.env.PORT = '8000';
    server = require('../src').default;
  });
  after(() => {
    server.close();
  });

  it('SHOULD throw WHEN home page requested', (done) => {
    http.get('http://localhost:8000', (res) => {
      expect(res.statusCode).equal(StatusCodes.NOT_FOUND);
      done();
    });
  });
});
