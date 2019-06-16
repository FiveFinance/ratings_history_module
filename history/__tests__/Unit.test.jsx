import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../client/src/components/App';
import HistoryApp from '../client/src/components/HistoryApp';
import Purchase, { DownloadTC } from '../client/src/components/Purchase';
import mockData from '../__mocks__/mockData';

describe('Purchase Component', () => {
  it('Should render purchase component correctly with mock data', () => {
    // eslint-disable-next-line max-len
    const purchaseComponent = render(<Purchase purchase={mockData[0]} key={mockData[0].purchase_id} />);
    expect(purchaseComponent).toMatchSnapshot();
  });

  test('Should start with purchase component not expanded', () => {
    const wrapper = shallow(<Purchase purchase={mockData[0]} key={mockData[0].purchase_id} />);

    wrapper.instance().setState({
      purchase: mockData[0],
      expanded: false,
    });

    expect(wrapper.state('expanded')).toEqual(false);
    expect(wrapper.find('div.key')).toHaveLength(0);
    expect(wrapper.find('div.value')).toHaveLength(0);
  });

  test('Should change when expanded', () => {
    const wrapper = shallow(<Purchase purchase={mockData[0]} key={mockData[0].purchase_id} />);
    wrapper.instance().setState({
      expanded: true,
    });

    expect(wrapper.state('expanded')).toEqual(true);
    expect(wrapper.find('div.key')).toHaveLength(9);
    expect(wrapper.find('div.value')).toHaveLength(9);
  });
});

const setup = () => {
  const myApp = shallow(<App />);
  const historyApp = shallow(<HistoryApp />);
  historyApp.setState({
    purchases: mockData,
    market: 'Bear',
  });
  return { myApp, historyApp };
};

afterAll(() => {
  const jsdomAlert = window.alert;
  window.alert = jsdomAlert;
});

describe('Rendering Check', () => {
  test('App renders on page', () => {
    const { myApp } = setup();
    expect(myApp.exists()).toBe(true);
  });

  test('History Module Module renders on page', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { historyApp } = setup();
    expect(historyApp.exists()).toBeTruthy();
  });

  test('History app should contain states', () => {
    const wrapper = shallow(<HistoryApp />);
    expect(wrapper.state().purchases.length).toBeGreaterThan(0);
  });
});
