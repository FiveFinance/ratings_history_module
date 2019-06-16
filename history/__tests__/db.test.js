/* eslint-env jest */

const mongoose = require('mongoose');
const Purchase = require('../database-mongodb/Stock2');

const mongoUri = 'mongodb://localhost/fec_history';

describe('Verify that the History database has been seeded', () => {
  beforeEach(() => mongoose.connect(mongoUri));
  afterEach(() => mongoose.connection.close());

  test('Overall documents', (done) => {
    Purchase.distinct('symbol')
      .exec((err, results) => {
        expect(results.length).toBeGreaterThan(99);
        done();
      });
  });

  test('There is a status field in a given document', (done) => {
    Purchase.findOne({ symbol: 'AAPL' })
      .select('status')
      .exec((err, results) => {
        expect(results).toBeTruthy();
        done();
      });
  });
});

// import * as HistoryApp from '../client/src/components/HistoryApp';

// jest.mock('../model');

// describe('getPurchaseData() using Promises', () => {
//   it('should load purchase data', () => HistoryApp.getPurchaseData('AAPL')
//     .then((data) => {
//       expect(data[0]).toBeDefined();
//       expect(data[0].symbol).toEqual('AAPL');
//     }));
// });
