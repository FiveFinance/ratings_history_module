import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Review from './Review';

const ReviewList = ({ stock, market }) => (
  <AllReviews>
    <Review oneReview={stock.reviewBuy} miniHeader="Buy Summary" market={market} />
    <Review oneReview={stock.reviewSell} miniHeader="Sell Summary" market={market} />
  </AllReviews>
);

const AllReviews = styled.div`
  display: inline-flex:
  flex-direction: row;
  flex-wrap: nowrap;
  width: 480px;
  justify-content: space-between;
`;

ReviewList.propTypes = {
  stock: PropTypes.shape({
    buy: PropTypes.number,
    hold: PropTypes.number,
    sell: PropTypes.number,
  }).isRequired,
  market: PropTypes.string.isRequired,
};

export default ReviewList;
