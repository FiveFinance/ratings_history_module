
import request from 'supertest';
import http from 'http';
import app from '../app';
import tickerNames from '../__mocks__/tickerNames';

const stockID = tickerNames[0][0];

describe('Client request to server returns correctly', () => {
  let server;

  beforeAll((done) => {
    server = http.createServer(app);
    server.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

  // it('returns 200', () => {
  //   const response = supertest(app).get('/');
  //   expect(response.status).toBe(200);
  // });

  test('GET /api/history for valid stockID, headers check', () => request(server)
    .get(`/api/history/${stockID}`)
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  test('GET *.js will return a bundle', () => request(server)
    .get('/bundle.js')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  test('GET *.js will return brotli compression if encodings OK', () => request(server)
    .get('/bundle.js')
    .set('Accept-Encoding', 'br')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  test('GET *.js will return gzip compression if encodings OK', () => request(server)
    .get('/bundle.js')
    .set('Accept-Encoding', 'gzip')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));
});
