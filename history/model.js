const Purchase = require('./database-mongodb/Stock2.js');

// module.exports.requestPurchase = stockID => Purchase.findOne({ where: { symbol: stockID } });

module.exports.requestPurchase = ((stockID) => {
  return new Promise((resolve, reject) => {
    Purchase.find({ symbol: stockID })
      .then(foundPurchases => resolve(foundPurchases))
      .catch(err => reject(err));
  });
});
