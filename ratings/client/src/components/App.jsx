import React from 'react';
import styled from 'styled-components';
import RatingsApp from './RatingsApp';

const HistoryApp = () => (
  <Wrapper>
    <RatingsApp />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 700px + .05vw;
  padding-left: 40px;
  -webkit-transition: background 300ms;
  transition: background 300ms;

  @font-face {
    font-family: DIN Pro;
    font-weight: normal;
    src: url("fonts/DINProRegular.otf") format("opentype");
  }

  body, p, div {
    font-family: "DIN Pro", -apple-system, system-ui, sans-serif;
    font-weight: normal;
  }
`;

export default HistoryApp;
