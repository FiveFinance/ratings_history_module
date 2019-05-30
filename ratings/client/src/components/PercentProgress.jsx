/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BULL = '#21ce99';
const BEAR = '#f45531';
const BLACK = '#171718';
const BULLBAR = 'rgba(33, 206, 153, 0.9)';
const BEARBAR = 'rgba(244, 85, 49, 0.9)';
const BULLGRADIENT = 'linear-gradient(90deg, rgba(33, 206, 153, 0.01), rgba(33, 206, 153, 0.15) 8%)';
const BEARGRADIENT = 'linear-gradient(90deg, rgba(244, 85, 49, 0.01), rgba(244, 85, 49, 0.15) 8%)';
const BLACKGRADIENT = 'linear-gradient(90deg, rgba(23, 23, 24, 0.01), rgba(23, 23, 24, 0.15) 8%)';

const PercentProgress = ({
  votes, total, voteFor, market,
}) => (
  <AllBars>
    <VoteFor voteFor={voteFor} market={market}>
      {voteFor}
      &nbsp;
    </VoteFor>
    <ProgressBar voteFor={voteFor} market={market}>
      <Filler percentage={Math.floor(100 * votes / total)} voteFor={voteFor} market={market}>
        <Percent>
          {`${Math.floor(100 * votes / total)}%`}
          <PercentBG percentage={Math.floor(100 * votes / total)} voteFor={voteFor} market={market} />
        </Percent>
      </Filler>
    </ProgressBar>
  </AllBars>
);

const AllBars = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: normal;
  -webkit-text-stroke: 0.8px;
  letter-spacing: 0.0350em;
  align-items: baseline;
`;

const VoteFor = styled.div`
  width: 36px;
  height: 19px;
  color: ${({ voteFor, market }) => (voteFor === 'Buy'
    ? market === 'Bear'
      ? BEAR
      : BULL
    : BLACK)};
  display: flex;
`;

const ProgressBar = styled.div`
  width: 426px;
  height: 6px;
  color: ${({ voteFor, market }) => (voteFor === 'Buy'
    ? market === 'Bear'
      ? BEARBAR
      : BULLBAR
    : BLACK)};
  background: #ffffff;
  border-radius: 4px;
  margin: 24px 0;
  display: flex;
`;

const Filler = styled.div`
  background: ${({ voteFor, market }) => (voteFor === 'Buy'
    ? market === 'Bear'
      ? BEAR
      : BULL
    : BLACK)};
  height: 100%;
  border-radius: 4px 0 0 4px;
  width: ${({ percentage }) => (percentage / 100) * 426 - 2}px;
  text-indent: ${({ percentage }) => (percentage / 100) * 426}px;
  display: flex;
`;

const PercentBG = styled.div`
    margin-left: 0;
    width: ${({ percentage }) => ((426) - 8 - ((percentage / 100) * 426))}px;
    height: 6px;
    border-radius: 4px;
    background: ${({ voteFor, market }) => (voteFor === 'Buy'
    ? market === 'Bear'
      ? BEARGRADIENT
      : BULLGRADIENT
    : BLACKGRADIENT)};
 
    display: flex;
    align-self: center;
`;

const Percent = styled.div`
  display: flex;
  align-self: center;
`;

PercentProgress.propTypes = {
  total: PropTypes.number.isRequired,
  voteFor: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  market: PropTypes.string.isRequired,
};

// PercentProgress.defaultProps = {
//   market: 'Bull',
// };

export default PercentProgress;
