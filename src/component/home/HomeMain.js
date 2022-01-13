import IMGthis from '../../image/gflasBgImg.jpg';
import React from 'react';
import styled from 'styled-components';
import Foot from './Foot';
import Head from './Head';
import Main from '../../container/Main';

const IsPickture = styled.div`
  box-sizing: border-box;
  background: url(${IMGthis}) no-repeat 50% 50% / cover;
  width: 100%;
  height: 730px;
  overflow: hidden;
`;

const HomeMain = () => {
  return (
    <>
      <IsPickture>
        <Head />
        <Main />
      </IsPickture>
      <Foot />
    </>
  );
};

export default HomeMain;
