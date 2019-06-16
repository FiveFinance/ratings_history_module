const mockData = [
  {
    symbol: 'AAPL',
    purchase_id: 699,
    name: 'Apple',
    timeinforce: 'Good for day',
    submitted: '2018-02-09T09:12:06.120Z',
    status: 'filled',
    enteredQuantity: 81,
    filled: '2018-12-24T22:31:03.791Z',
    filledQuantityShares: 81,
    filledQuantityPrice: 81,
    total: 144,
  },
];

module.exports.requestPurchase = stockID => new Promise((resolve, reject) => {
  process.nextTick(() => (mockData[0].symbol === stockID
    ? resolve(mockData)
    : reject(new Error(`Account with ${stockID} not found.`))
  ));
});
