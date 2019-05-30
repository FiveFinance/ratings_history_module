/* eslint-disable no-bitwise */
// eslint-disable-next-line no-underscore-dangle
require('events').EventEmitter.prototype._maxListeners = 100;
const { commerce, company, lorem } = require('faker');
const db = require('./index.js');
const Stock = require('./Stock.js');

const tickerNames = [
  ['MSFT', 'Microsoft Corporation'],
  ['AAPL', 'Apple Inc.'],
  ['FB', 'Facebook, Inc.'],
  ['BABA', 'Alibaba Group Holding Limited'],
  ['XOM', 'Exxon Mobil Corporation'],
  ['V', 'Visa Inc.'],
  ['JPM', 'JPMorgan Chase & Co.'],
  ['BAC', 'Bank of America Corporation'],
  ['VZ', 'Verizon Communications Inc.'],
  ['INTC', 'Intel Corporation'],
  ['WFC', 'Wells Fargo & Company'],
  ['PFE', 'Pfizer Inc.'],
  ['CSCO', 'Cisco Systems, Inc.'],
  ['T', 'AT&T Inc.'],
  ['MRK', 'Merck & Co., Inc.'],
  ['BA', 'The Boeing Company'],
  ['TSM', 'Taiwan Semiconductor Manufacturing Company Limited'],
  ['KO', 'The Coca-Cola Company'],
  ['DIS', 'The Walt Disney Company'],
  ['ORCL', 'Oracle Corporation'],
  ['CMCSA', 'Comcast Corporation'],
  ['NFLX', 'Netflix, Inc.'],
  ['C', 'Citigroup Inc.'],
  ['NKE', 'NIKE, Inc.'],
  ['LLY', 'Eli Lilly and Company'],
  ['CRM', 'salesforce.com, inc.'],
  ['DWDP', 'DowDuPont Inc.'],
  ['NVDA', 'NVIDIA Corporation'],
  ['MO', 'Altria Group, Inc.'],
  ['PBR-A', 'Petróleo Brasileiro S.A. - Petrobras'],
  ['PBR', 'Petróleo Brasileiro S.A. - Petrobras'],
  ['SBUX', 'Starbucks Corporation'],
  ['GE', 'General Electric Company'],
  ['GILD', 'Gilead Sciences, Inc.'],
  ['BMY', 'Bristol-Myers Squibb Company'],
  ['COP', 'ConocoPhillips'],
  ['USB', 'U.S. Bancorp'],
  ['SAN', 'Banco Santander, S.A.'],
  ['MS', 'Morgan Stanley'],
  ['MDLZ', 'Mondelez International, Inc.'],
  ['CVS', 'CVS Health Corporation'],
  ['ABEV', 'Ambev S.A.'],
  ['QCOM', 'QUALCOMM Incorporated'],
  ['FOXA', 'Fox Corporation'],
  ['VALE', 'Vale S.A.'],
  ['BBD', 'Banco Bradesco S.A.'],
  ['RIO', 'Rio Tinto Group'],
  ['SLB', 'Schlumberger Limited'],
  ['WBA', 'Walgreens Boots Alliance, Inc.'],
  ['LYG', 'Lloyds Banking Group plc'],
  ['SCHW', 'The Charles Schwab Corporation'],
  ['BSX', 'Boston Scientific Corporation'],
  ['GM', 'General Motors Company'],
  ['ITUB', 'Itaú Unibanco Holding S.A.'],
  ['OXY', 'Occidental Petroleum Corporation'],
  ['TSLA', 'Tesla, Inc.'],
  ['BIIB', 'Biogen Inc.'],
  ['KMI', 'Kinder Morgan, Inc.'],
  ['UBS', 'UBS Group AG'],
  ['MU', 'Micron Technology, Inc.'],
  ['JD', 'JD.com, Inc.'],
  ['KHC', 'The Kraft Heinz Company'],
  ['ET', 'Energy Transfer LP'],
  ['BBVA', 'Banco Bilbao Vizcaya Argentaria, S.A.'],
  ['AMAT', 'Applied Materials, Inc.'],
  ['IBN', 'ICICI Bank Limited'],
  ['CCL', 'Carnival Corporation'],
  ['ATVI', 'Activision Blizzard, Inc.'],
  ['F', 'Ford Motor Company'],
  ['WMB', 'The Williams Companies, Inc.'],
  ['BBT', 'BB&T Corporation'],
  ['EBAY', 'eBay Inc.'],
  ['DAL', 'Delta Air Lines, Inc.'],
  ['NOK', 'Nokia Corporation'],
  ['SQ', 'Square, Inc.'],
  ['MNST', 'Monster Beverage Corporation'],
  ['HPQ', 'HP Inc.'],
  ['AMD', 'Advanced Micro Devices, Inc.'],
  ['SIRI', 'Sirius XM Holdings Inc.'],
  ['S', 'Sprint Corporation'],
  ['GOLD', 'Barrick Gold Corporation'],
  ['TWTR', 'Twitter, Inc.'],
  ['HAL', 'Halliburton Company'],
  ['FDC', 'First Data Corporation'],
  ['CNC', 'Centene Corporation'],
  ['APC', 'Anadarko Petroleum Corporation'],
  ['HPE', 'Hewlett Packard Enterprise Company'],
  ['NEM', 'Newmont Mining Corporation'],
  ['FCX', 'Freeport-McMoRan Inc.'],
  ['CBS', 'CBS Corporation'],
  ['TEVA', 'Teva Pharmaceutical Industries Limited'],
  ['DB', 'Deutsche Bank Aktiengesellschaft'],
  ['IQ', 'iQIYI, Inc.'],
  ['FITB', 'Fifth Third Bancorp'],
  ['LEN', 'Lennar Corporation'],
  ['KEY', 'KeyCorp'],
  ['DHI', 'D.R. Horton, Inc.'],
  ['FNMA', 'Federal National Mortgage Association'],
  ['CFG', 'Citizens Financial Group, Inc.'],
  ['MYL', 'Mylan N.V.'],
];

class Seed {
  constructor() {
    this.count = 0;
    this.stock = [];
    this.initialize = this.initialize.bind(this);
    this.makeBS = this.makeBS.bind(this);
    this.saveDB = this.saveDB.bind(this);
    this.debug = this.debug.bind(this);
  }

  makeBS(i) {
    const descriptor = company.catchPhraseDescriptor();
    const descriptor2 = lorem.sentence();
    const descriptor3 = company.catchPhraseDescriptor();
    const descriptor4 = lorem.sentence();
    const material = commerce.productMaterial();
    const adjective = commerce.productAdjective();
    const bs1 = company.bs();
    const bs2 = company.bs();
    const bs3 = company.bs();
    const bs4 = company.bs();

    this.stock = [{
      symbol: tickerNames[i][0],
      company: tickerNames[i][1],
      recBuy: (Math.random() * 20) + 10 | 0,
      recHold: (Math.random() * 20) + 10 | 0,
      recSell: (Math.random() * 20) + 10 | 0,
      reviewBuy: `${material} ${bs1} ${tickerNames[i][1]} ${descriptor} ${adjective}. \n The ${bs2} ${descriptor2}. \n Overall, ${bs1} ${tickerNames[i][1]} ${descriptor3} ${descriptor4}`,
      reviewSell: `${material} ${bs3} ${descriptor} ${tickerNames[i][1]} ${adjective}. \n For ${bs4} ${descriptor2}. \n Hence, ${bs3} ${tickerNames[i][1]} ${descriptor3} ${descriptor4}`,
    }];
  }

  saveDB() {
    Stock.create(this.stock)
      .then(() => db.close())
      .catch(err => process.stdout.write(`Error saving data to database: ${err}`));
  }

  debug() {
    process.stdout.write(this.stock);
  }

  initialize(current) {
    this.count = current;
    this.makeBS(this.count);
    this.saveDB();
  }
}

const seedOnce = new Seed();

for (let x = 0; x < 100; x += 1) {
  seedOnce.initialize(x);
}
