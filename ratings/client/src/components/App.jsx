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

  a {
    color: #21ce99;
    text-decoration: none;
    font-size: 13px;
    line-height: 19px;
    text-align: start;  
    letter-spacing: 0.05px; 
  }
  a:hover {
    color: #1ae9aa;
    transition-duration: 300ms;
  }
`;

export default HistoryApp;
