import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import { TriangleDown } from 'styled-icons/octicons/TriangleDown';
import Triangle from './Triangle.svg';

const BULL = '#21ce99';
const BEAR = '#f45531';
const BLACK = '#171718';
const BULLHOVER = '#1ae9aa';
const BEARHOVER = '#ff6340';
const REVIEWBG = '#f7f7f8';
const GRAY = '#cbcbcd';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    const { market, miniHeader } = this.props;
    this.market = market;
    this.miniHeader = miniHeader;
    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore(e) {
    e.preventDefault();
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { expanded } = this.state;
    const { miniHeader, oneReview, market } = this.props;
    if (expanded === true) {
      return (
        <div>
          <ReviewWrapper>
            <ReviewBox expanded={expanded}>
              <InnerContainer>
                <Summary>{miniHeader}</Summary>
                <FirstPara>
                  <p>
                    <span>&#34;</span>
                    {oneReview.split('\n', 3)[0]}
                  </p>
                </FirstPara>
                <RDetails>
                  <p key="reviewp1">
                    {oneReview.split('\n', 3)[1]}
                  </p>
                  <p key="reviewp2">
                    {oneReview.split('\n', 3)[2]}
                    <span>&#8221;</span>
                  </p>
                </RDetails>
              </InnerContainer>
            </ReviewBox>
            <InnerContainer>
              <ReadMore market={market} onClick={e => this.toggleReadMore(e)}>{expanded === true ? 'Read Less' : 'Read More'}</ReadMore>
              <ReviewCaption>Morningstar</ReviewCaption>
            </InnerContainer>
          </ReviewWrapper>
          <ReviewTriangle />
        </div>
      );
    }
    return (
      <div>
        <ReviewWrapper>
          <ReviewBox expanded={expanded}>
            <InnerContainer>
              <Summary>{miniHeader}</Summary>
              <FirstPara>
                <p>
                  <span>&#34;</span>
                  {oneReview.split('\n', 3)[0]}
                </p>
              </FirstPara>
            </InnerContainer>
          </ReviewBox>
          <InnerContainer>
            <ReadMore market={market} onClick={e => this.toggleReadMore(e)}>{expanded === true ? 'Read Less' : 'Read More'}</ReadMore>
            <ReviewCaption>Morningstar</ReviewCaption>
          </InnerContainer>
        </ReviewWrapper>
        <ReviewTriangle />
      </div>
    );
  }
}

const InnerContainer = styled.div`
  margin-left: 4px;
`;
const FirstPara = styled.div`
  text-indent: -4px;
`;

const ReviewWrapper = styled.div`
  border-radius: 4px 4px 4px 0;
  padding: 0 24px 24px;
  margin-top: 6px;
  width: 180px;
  background-color: ${REVIEWBG};
  color: ${BLACK};
  padding-bottom: 16px;
`;

const Summary = styled.div`
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-size: 13px;
  -webkit-text-stroke-width: 0.8px;
  margin-bottom: -6px;
`;

const RDetails = styled.div`
  margin-bottom: -13px;
`;

const ReviewBox = styled.div`
  border-radius: 4px 4px 4px 0;
  width: 180px;
  height: 110px;
  overflow: hidden;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  
  &:first-child {
    height: ${props => (props.expanded === false ? '80px' : 'auto')};
  }

  p {
    text-align: left;
    color: ${BLACK};
    font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: 0.2px;
  }

    height: auto;
    -webkit-transition: background 1250ms, margin-bottom 1250ms, -webkit-box-shadow 1250ms;
    transition: background 1250ms, margin-bottom 1250ms, -webkit-box-shadow 1250ms;
    transition: background 1250ms, box-shadow 1250ms, margin-bottom 1250ms;
    transition: background 1250ms, box-shadow 1250ms, margin-bottom 1250ms, -webkit-box-shadow 1250ms;
`;

const ReadMore = styled.div`
  -webkit-text-stroke-width: 0.5px;
  text-decoration: none;
  font-size: 13px;
  line-height: 19px;
  text-align: start;  
  letter-spacing: 0.05px; 
  color: ${props => (props.market === 'Bear'
    ? BEAR
    : BULL)};
    
  &:hover {
    color: ${props => (props.market === 'Bear'
    ? BEARHOVER
    : BULLHOVER)}
    transition-duration: 300ms;
    cursor: grab;
  }
`;

const ReviewCaption = styled.div`
  color: ${GRAY};
  font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
  font-weight: normal;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 0.2px;
  text-align: left;
  &:hover {
    color: ${GRAY};
  }
  padding-top: 16px;
  padding-bottom: 6px;
`;

const ReviewTriangle = () => (
  <img src={Triangle} alt="Triangle" width="24px" height="24px" />
);
// const ReviewTriangle = styled(TriangleDown)`
//   border-radius: 4px 4px 4px 0;
//   margin-top: -15px;
//   height: 48px;
//   color: rgba(23, 23, 24, 0.02);
// `;

Review.propTypes = {
  oneReview: PropTypes.string.isRequired,
  miniHeader: PropTypes.string.isRequired,
  market: PropTypes.string.isRequired,
};

// Review.defaultProps = {
//   oneReview: 'Placeholder review',
//   miniHeader: 'Buy Me',
//   market: 'Bull',
// };

export default Review;
