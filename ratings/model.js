const Stock = require('./database-mongodb/Stock.js');

module.exports.requestStock = (stockID => Stock.findOne({ symbol: stockID }));

// module.exports.requestStock = ((stockID) => {
//   return new Promise((resolve, reject) => {
//     Stock.findOne({ symbol: stockID })
//       .then(foundStock => resolve(foundStock))
//       .catch(err => reject(err));
//   });
// });
