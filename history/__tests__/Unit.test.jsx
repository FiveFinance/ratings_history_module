import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../client/src/components/App';
import HistoryApp from '../client/src/components/HistoryApp';
import Purchase from '../client/src/components/Purchase';

function setup() {
  const myApp = shallow(<App />);
  const historyApp = shallow(<HistoryApp />);
  return { myApp, historyApp };
}

afterAll(() => {
  const jsdomAlert = window.alert;
  window.alert = jsdomAlert;
});

describe('App', () => {
  test('App renders on page', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { myApp } = setup();
    expect(myApp.exists()).toBe(true);
  });
});

describe('History of Purchases Module', () => {
  test('History of Purchases Module renders on page', () => {
    const jsdomAlert = window.alert;
    window.alert = () => {};

    const { historyApp } = setup();
    expect(historyApp.exists()).toBeTruthy();
  });
});

const mockData = [
  {
    symbol: 'DHI',
    purchase_id: 699,
    name: 'D.R. Horton, Inc.',
    timeinforce: 'Good for day',
    submitted: '2018-02-09T09:12:06.120Z',
    status: 'filled',
    enteredQuantity: 81,
    filled: '2018-12-24T22:31:03.791Z',
    filledQuantityShares: 81,
    filledQuantityPrice: 81,
    total: '144.00',
  },
  {
    symbol: 'FNMA',
    purchase_id: 4694,
    name: 'Federal National Mortgage Association',
    timeinforce: 'Good for day',
    submitted: '2015-05-11T02:04:14.978Z',
    status: 'filled',
    enteredQuantity: 12,
    filled: '2018-11-23T16:39:08.045Z',
    filledQuantityShares: 12,
    filledQuantityPrice: 12,
    total: '710.00' 
},
  {
    symbol: 'CFG',
    purchase_id: 3784,
    name: 'Citizens Financial Group, Inc.',
    timeinforce: 'Good for day',
    submitted: '2016-07-24T07:51:30.372Z',
    status: 'filled',
    enteredQuantity: 77,
    filled: '2018-10-24T09:47:34.008Z',
    filledQuantityShares: 77,
    filledQuantityPrice: 77,
    total: '100.00',
  },
  {
    symbol: 'MYL',
    purchase_id: 4973,
    name: 'Mylan N.V.',
    timeinforce: 'Good for day',
    submitted: '2017-08-04T11:55:47.305Z',
    status: 'filled',
    enteredQuantity: 46,
    filled: '2017-09-11T06:48:59.038Z',
    filledQuantityShares: 46,
    filledQuantityPrice: 46,
    total: '913.00',
  },
];

describe('Purchase Component', () => {
  it('render purchase component correctly with mock data', () => {
    const purchaseComponent = render(
      <Purchase purchase={mockData[0]} key={mockData[0].purchase_id} />,
    );
    expect(purchaseComponent).toMatchSnapshot();
  });

  it('should expand', () => {
    const wrapper = shallow(
      <Purchase purchase={mockData[0]} key={mockData[0].purchase_id} />,
    );
    expect('expanded' in wrapper.state()).toEqual(true);
    // expect(wrapper.find(Info).length).toBe(9);
  });
});


// it('should check month and years dropdowns displayed', () => {
//     const props = {
//         showMonthYearsDropdowns: true
//     },
//     DateInputComponent = mount(<DateInput {...props} />).find('.datepicker');
//     expect(DateInputComponent.hasClass('react-datepicker-hide-month')).toEqual(true);
// });
