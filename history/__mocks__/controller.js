jest.mock('../model');

import { requestPurchase } from '../model';

console.log('MOCK\ncontroller\ncontroller\ncontroller\ncontroller\ncontroller\ncontroller\ncontroller\n')

const getPurchases = (stockID) => {
  return requestPurchases(`/api/history/${stockID}`)
    .then(purchases => purchases)
    .catch(err => console.log(err));
};
export default getPurchases;
