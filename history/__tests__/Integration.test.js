// const mongoose = require('mongoose');
// const request = require('supertest');
// const { app } = require('../app.js');

// const mongoUri = 'mongodb://localhost:27017/fec_history';

// const tickerNames = [
//   ['MSFT', 'Microsoft Corporation'],
//   ['AAPL', 'Apple Inc.'],
//   ['FB', 'Facebook, Inc.'],
//   ['BABA', 'Alibaba Group Holding Limited'],
//   ['XOM', 'Exxon Mobil Corporation'],
//   ['V', 'Visa Inc.'],
//   ['JPM', 'JPMorgan Chase & Co.'],
//   ['BAC', 'Bank of America Corporation'],
//   ['VZ', 'Verizon Communications Inc.'],
//   ['INTC', 'Intel Corporation'],
//   ['WFC', 'Wells Fargo & Company'],
//   ['PFE', 'Pfizer Inc.'],
//   ['CSCO', 'Cisco Systems, Inc.'],
//   ['T', 'AT&T Inc.'],
//   ['MRK', 'Merck & Co., Inc.'],
//   ['BA', 'The Boeing Company'],
//   ['TSM', 'Taiwan Semiconductor Manufacturing Company Limited'],
//   ['KO', 'The Coca-Cola Company'],
//   ['DIS', 'The Walt Disney Company'],
//   ['ORCL', 'Oracle Corporation'],
//   ['CMCSA', 'Comcast Corporation'],
//   ['NFLX', 'Netflix, Inc.'],
//   ['C', 'Citigroup Inc.'],
//   ['NKE', 'NIKE, Inc.'],
//   ['LLY', 'Eli Lilly and Company'],
//   ['CRM', 'salesforce.com, inc.'],
//   ['DWDP', 'DowDuPont Inc.'],
//   ['NVDA', 'NVIDIA Corporation'],
//   ['MO', 'Altria Group, Inc.'],
//   ['PBR-A', 'Petróleo Brasileiro S.A. - Petrobras'],
//   ['PBR', 'Petróleo Brasileiro S.A. - Petrobras'],
//   ['SBUX', 'Starbucks Corporation'],
//   ['GE', 'General Electric Company'],
//   ['GILD', 'Gilead Sciences, Inc.'],
//   ['BMY', 'Bristol-Myers Squibb Company'],
//   ['COP', 'ConocoPhillips'],
//   ['USB', 'U.S. Bancorp'],
//   ['SAN', 'Banco Santander, S.A.'],
//   ['MS', 'Morgan Stanley'],
//   ['MDLZ', 'Mondelez International, Inc.'],
//   ['CVS', 'CVS Health Corporation'],
//   ['ABEV', 'Ambev S.A.'],
//   ['QCOM', 'QUALCOMM Incorporated'],
//   ['FOXA', 'Fox Corporation'],
//   ['VALE', 'Vale S.A.'],
//   ['BBD', 'Banco Bradesco S.A.'],
//   ['RIO', 'Rio Tinto Group'],
//   ['SLB', 'Schlumberger Limited'],
//   ['WBA', 'Walgreens Boots Alliance, Inc.'],
//   ['LYG', 'Lloyds Banking Group plc'],
//   ['SCHW', 'The Charles Schwab Corporation'],
//   ['BSX', 'Boston Scientific Corporation'],
//   ['GM', 'General Motors Company'],
//   ['ITUB', 'Itaú Unibanco Holding S.A.'],
//   ['OXY', 'Occidental Petroleum Corporation'],
//   ['TSLA', 'Tesla, Inc.'],
//   ['BIIB', 'Biogen Inc.'],
//   ['KMI', 'Kinder Morgan, Inc.'],
//   ['UBS', 'UBS Group AG'],
//   ['MU', 'Micron Technology, Inc.'],
//   ['JD', 'JD.com, Inc.'],
//   ['KHC', 'The Kraft Heinz Company'],
//   ['ET', 'Energy Transfer LP'],
//   ['BBVA', 'Banco Bilbao Vizcaya Argentaria, S.A.'],
//   ['AMAT', 'Applied Materials, Inc.'],
//   ['IBN', 'ICICI Bank Limited'],
//   ['CCL', 'Carnival Corporation'],
//   ['ATVI', 'Activision Blizzard, Inc.'],
//   ['F', 'Ford Motor Company'],
//   ['WMB', 'The Williams Companies, Inc.'],
//   ['BBT', 'BB&T Corporation'],
//   ['EBAY', 'eBay Inc.'],
//   ['DAL', 'Delta Air Lines, Inc.'],
//   ['NOK', 'Nokia Corporation'],
//   ['SQ', 'Square, Inc.'],
//   ['MNST', 'Monster Beverage Corporation'],
//   ['HPQ', 'HP Inc.'],
//   ['AMD', 'Advanced Micro Devices, Inc.'],
//   ['SIRI', 'Sirius XM Holdings Inc.'],
//   ['S', 'Sprint Corporation'],
//   ['GOLD', 'Barrick Gold Corporation'],
//   ['TWTR', 'Twitter, Inc.'],
//   ['HAL', 'Halliburton Company'],
//   ['FDC', 'First Data Corporation'],
//   ['CNC', 'Centene Corporation'],
//   ['APC', 'Anadarko Petroleum Corporation'],
//   ['HPE', 'Hewlett Packard Enterprise Company'],
//   ['NEM', 'Newmont Mining Corporation'],
//   ['FCX', 'Freeport-McMoRan Inc.'],
//   ['CBS', 'CBS Corporation'],
//   ['TEVA', 'Teva Pharmaceutical Industries Limited'],
//   ['DB', 'Deutsche Bank Aktiengesellschaft'],
//   ['IQ', 'iQIYI, Inc.'],
//   ['FITB', 'Fifth Third Bancorp'],
//   ['LEN', 'Lennar Corporation'],
//   ['KEY', 'KeyCorp'],
//   ['DHI', 'D.R. Horton, Inc.'],
//   ['FNMA', 'Federal National Mortgage Association'],
//   ['CFG', 'Citizens Financial Group, Inc.'],
//   ['MYL', 'Mylan N.V.'],
// ];

// jest.mock('../app');

// jest.mock('../model');

// jest.mock('../controller');

// describe('request response cycle', () => {
//   beforeEach(() => mongoose.connect(mongoUri, { useNewUrlParser: true }));
//   afterEach(() => mongoose.disconnect());

//   test('GET /api/history headers', (done) => {
//     const ticker = tickerNames[Math.random() * 100 | 0];
//     request(app)
//       .get(`/api/history/${ticker}`)
//       .then((response) => {
//         expect(response.status).toEqual(200);
//         expect(response.type).toEqual('application/json');
//         done();
//       });
//   });

//   test('GET /api/history body', (done) => {
//     const ticker = tickerNames[Math.random() * 100 | 0];
//     request(app)
//       .get(`/api/history/${ticker}`)
//       .then((response) => {
//         expect(response.body[0]).toHaveProperty('symbol');
//         expect(response.body[0]).toHaveProperty('purchase_id');
//         expect(response.body[0]).toHaveProperty('name');
//         expect(response.body[0]).toHaveProperty('timeinforce');
//         expect(response.body[0]).toHaveProperty('status');
//         expect(response.body[0]).toHaveProperty('enteredQuantity');
//         expect(response.body[0]).toHaveProperty('filled');
//         expect(response.body[0]).toHaveProperty('filledQuantityShares');
//         expect(response.body[0]).toHaveProperty('filledQuantityPrice');
//         expect(response.body[0]).toHaveProperty('total');
//         done();
//       });
//   });
// });

