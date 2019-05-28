import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
// import { expect } from 'chai';
import App from '../client/src/components/App';
import RatingsApp from '../client/src/components/RatingsApp';
import DataSpotlight from '../client/src/components/DataSpotlight';

global.React = React;
global.shallow = shallow;
global.mount = mount;
global.sinon = sinon;

function setup() {
  const myApp = shallow(<App />);
  const ratingsApp = shallow(<RatingsApp />);
  return { myApp, ratingsApp };
}

it('should render ratings correctly', () => {
  const wrapper = render(
    <RatingsApp />
  );
  expect(RatingsApp).toMatchSnapshot();
});

describe("Ratings App Module", () => {
  test("renders", () => {
    const wrapper = shallow(<RatingsApp />);
    expect(wrapper.exists()).toBe(true);
  })
});

const dummyData = [{
  stock: {
    symbol: 'TST',
    company: 'Fake Company Inc',
    recBuy: 11,
    recHold: 15,
    recSell: 18,
    reviewBuy: 'Rubber killer recontextualize web services Microsoft Corporation impactful Gorgeous. \n The viral envisioneer initiatives Et perspiciatis error quas.. \n Overall, killer recontextualize web services Microsoft Corporation reciprocal Doloribus numquam expedita sed fugit tempore in adipisci.',
    reviewSell: 'Rubber open-source envisioneer channels impactful Microsoft Corporation Gorgeous. \n For sexy strategize bandwidth Et perspiciatis error quas.. \n Hence, open-source envisioneer channels Microsoft Corporation reciprocal Doloribus numquam expedita sed fugit tempore in adipisci.',
  },
  market: 'Bull',
}]

const mock = dummyData[0];
