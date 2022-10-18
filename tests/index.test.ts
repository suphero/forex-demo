import { describe, it } from 'mocha';
import { expect } from 'chai';
import http, { Server } from 'http';

describe('server', () => {
  let server: Server;
  before(() => {
    process.env.PORT = '8000';
    server = require('../src').default;
  });
  after(() => {
    server.close();
  });

  it('should return 404', (done) => {
    http.get('http://localhost:8000', (res) => {
      expect(res.statusCode).equal(404);
      done();
    });
  });
});
