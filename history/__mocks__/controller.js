jest.mock('../model');

import { requestPurchases } from '../model';

const getPurchases = (stockID) => {
  return requestPurchases(`/api/history/${stockID}`)
    .then(purchases => purchases)
    .catch(err => console.log(err));
};
export default getPurchases;
