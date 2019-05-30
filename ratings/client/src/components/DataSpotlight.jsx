import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
// import { Tag } from 'styled-icons/fa-solid/';
import svgTagBEAR from './tagBEAR.svg';
import svgTagBULL from './tagBULL.svg';

const BULL = '#21ce99';
const BEAR = '#f45531';
const BULLCIRCLE = 'rgba(33, 206, 153, 0.15)';
const BEARCIRCLE = 'rgba(244, 85, 49, 0.15)';

const DataSpotlight = ({ stock, market, updateMarket }) => (
  <Circle market={market} onClick={updateMarket}>
    <TagPercent market={market}>
      {market === 'Bear' && <img src={svgTagBEAR} alt="price tag" width="18px" height="16px" />}
      {market === 'Bull' && <img src={svgTagBULL} alt="price tag" width="18px" height="16px" />}
      {`  ${Math.floor(100 * stock.recBuy / (stock.recBuy + stock.recHold + stock.recSell))}%`}
    </TagPercent>
    <OfNRatings market={market}>
      {`of ${stock.recBuy + stock.recHold + stock.recSell} ratings`}
    </OfNRatings>
  </Circle>
);

const Circle = styled.button`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  background-color: ${({ market }) => (market === 'Bear' ? BEARCIRCLE : BULLCIRCLE)};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  -webkit-appearance: inherit;
  -webkit-appearance: initial;
  padding: 0;
  border: none;
  
  &:focus {
    outline:0;
  }
`;

const TagPercent = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  -webkit-text-stroke: 1px;
  font-size: 26px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.14px;
  color: ${({ market }) => (market === 'Bear' ? BEAR : BULL)};
  display: flex-inline;
  align-items: center;
`;

// const FlippedTag = styled(Tag)`
//   width: 16px;
//   height: 16px;
//   display: flex;
//   align-self: center;
//   color: #21ce99;
//   -moz-transform: scaleX(-1);
//   -o-transform: scaleX(-1);
//   -webkit-transform: scaleX(-1);
//   transform: scaleX(-1);
//   filter: FlipH;
//   -ms-filter: "FlipH";
//   display: flex;
// `;

const OfNRatings = styled.div`
  font-weight: normal;
  font-size: 13px;
  -webkit-text-stroke: 0.8px;
  letter-spacing: 0.0350em;
  display: flex;
  color: ${({ market }) => (market === 'Bear' ? BEAR : BULL)};
`;

DataSpotlight.propTypes = {
  stock: PropTypes.shape({
    buy: PropTypes.number,
    hold: PropTypes.number,
    sell: PropTypes.number,
  }).isRequired,
  market: PropTypes.string.isRequired,
  updateMarket: PropTypes.func.isRequired,
};

export default DataSpotlight;
