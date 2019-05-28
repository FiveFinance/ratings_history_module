const { requestPurchase } = require('./model');

module.exports.getPurchases = stockID => requestPurchase(stockID);
