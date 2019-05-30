import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PercentProgress from './PercentProgress';

const DataBarChart = ({ stock, market }) => (
  <AllBars>
    <PercentProgress votes={stock.recBuy} total={stock.recBuy + stock.recHold + stock.recSell} voteFor="Buy" market={market} />
    <PercentProgress votes={stock.recHold} total={stock.recBuy + stock.recHold + stock.recSell} voteFor="Hold" market={market} />
    <PercentProgress votes={stock.recSell} total={stock.recBuy + stock.recHold + stock.recSell} voteFor="Sell" market={market} />
  </AllBars>
);

const AllBars = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.0350em;
`;

DataBarChart.propTypes = {
  stock: PropTypes.shape({
    buy: PropTypes.number,
    hold: PropTypes.number,
    sell: PropTypes.number,
  }).isRequired,
  market: PropTypes.string.isRequired,
};

export default DataBarChart;
