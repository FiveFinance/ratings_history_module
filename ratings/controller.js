const { requestStock } = require('./model');

module.exports.getStocks = stockID => requestStock(stockID);
