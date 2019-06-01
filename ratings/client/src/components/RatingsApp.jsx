import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DataSpotlight from './DataSpotlight';
import DataBarChart from './DataBarChart';
import ReviewList from './ReviewList';

class RatingsApp extends React.Component {
  constructor() {
    super();
    this.state = {
      stock: {
        symbol: 'PHDR',
        company: 'Placeholder Company',
        recBuy: 18,
        recHold: 18,
        recSell: 18,
        reviewBuy: 'Rubber killer recontextualize web services Placeholder impactful Gorgeous. \n The viral envisioneer initiatives Et perspiciatis error quas.. \n Overall, killer recontextualize web services Microsoft Corporation reciprocal Doloribus numquam expedita sed fugit tempore in adipisci.',
        reviewSell: 'Rubber open-source envisioneer channels impactful Placeholder Gorgeous. \n For sexy strategize bandwidth Et perspiciatis error quas.. \n Hence, open-source envisioneer channels Microsoft Corporation reciprocal Doloribus numquam expedita sed fugit tempore in adipisci.',
      },
      market: 'Bull',
    };
    // this.market = this.state.pricedifferenceFromStartToToday === 'Negative' ? 'Bear' : 'Bull';
    this.getStockData = this.getStockData.bind(this);
    this.updateMarket = this.updateMarket.bind(this);
  }

  componentDidMount() {
    this.getStockData();
  }

  getStockData() {
    const stockID = window.location.pathname.split('/')[2];
    if (!stockID) {
      axios.get('/api/ratings/AAPL')
        .then(res => res.data)
        .then((result) => {
          this.setState({
            stock: result,
          });
        });
    } else {
      axios.get(`/api/ratings/${stockID}`)
        .then(res => res.data)
        .then((result) => {
          this.setState({
            stock: result,
          });
        });
    }
  }

  updateMarket(e) {
    const { market } = this.state;
    e.preventDefault();
    this.setState({
      market: market === 'Bull' ? 'Bear' : 'Bull',
    });
  }

  render() {
    const { stock, market } = this.state;
    return (
      <div>
        <ModuleHeader>Analyst Ratings</ModuleHeader>
        <Row>
          <Left>
            <DataSpotlight stock={stock} market={market} updateMarket={this.updateMarket} />
          </Left>
          <Right>
            <DataBarChart stock={stock} market={market} />
            <ReviewList stock={stock} market={market} />
          </Right>
        </Row>
      </div>
    );
  }
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 16px;
`;

const Left = styled.div`
  width: 134px;
  padding: 13px 48px 24px 24px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
`;

const ModuleHeader = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  text-align: start;
  letter-spacing: -0.14px;
  border-bottom: 1px solid;
  border-color: #f4f4f5;
  padding-bottom: 16px;
  max-width: 697px;
`;

export default RatingsApp;
