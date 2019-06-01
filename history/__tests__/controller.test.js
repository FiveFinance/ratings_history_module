import * as controller from '../controller';
// const controller = require('../controller.js');
// const Purchase = require('./controller.js');

jest.mock('../model'); // manual mocking ../__mocks__/model

describe('Valid stock id returns as expected via promises from the controller', () => {
  it('getPurchases returns an object with correct purchase company name', () => {
    expect.assertions(1);
    return controller.getPurchases('AAPL').then(data => expect(data[0].name).toEqual('Apple'));
  });

  it('getPurchases returns an object with purchase status', () => {
    expect.assertions(1);
    return controller.getPurchases('AAPL').then(data => expect(data[0].status).toEqual('filled'));
  });

  it('getPurchases returns an object with correct type of entered quantity', () => {
    expect.assertions(1);
    return controller.getPurchases('AAPL').then(data => expect(data[0].enteredQuantity).toBeGreaterThan(0));
  });

  it('getPurchases returns an object with correct type of total', () => {
    expect.assertions(1);
    return controller.getPurchases('AAPL').then(data => expect(data[0].total).toBeGreaterThan(0));
  });

  it('getPurchases returns an object with correctly formatted time', () => {
    expect.assertions(1);
    const regexp = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}');
    return controller.getPurchases('AAPL').then(data => expect(data[0].submitted).toMatch(regexp));
  });
});

describe('Invalid stock id returns error', () => {
  it('Handles error appropriately when ticker does not exist', () => {
    expect.assertions(1);
    return expect(controller.getPurchases('INVALID_STOCK')).rejects.toThrow('Account with INVALID_STOCK not found.');
  });
});
