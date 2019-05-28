const Purchase = require('./database-mongodb/Stock2.js');

module.exports.requestPurchase = stockID => Purchase.findOne({ where: { symbol: stockID } });
