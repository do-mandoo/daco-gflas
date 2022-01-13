import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import LogoColor from '../../image/gflasColor.png';
import LogoGray from '../../image/gflasGray.png';

const HeadWrap = styled.div`
  box-sizing: border-box;
  /* background-color: pink; */
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #000;
  h1 {
    margin: 0;
    padding: 0;
  }
  .Logo {
    position: relative;
    display: inline-block;
    padding: 5px 50px;
  }
  .imgColor {
    display: none;
    position: absolute;
    padding: 5px 50px;
    top: 0;
    left: 0;
    /* z-index: 99; */
  }
  :hover .imgColor {
    display: inline-block;
  }
  :hover {
    background-color: #fff;
    color: #000;
  }
`;

const Head = () => {
  return (
    <HeadWrap>
      <h1 className='Logo'>
        <img src={LogoGray} alt='Logo-Gray' />
        <img src={LogoColor} className='imgColor' alt='Logo-Color' />
        {/* <h1>
          <a href='/'>
            <img src={LogoGray} alt='Logo-Gray' />
          </a>
        </h1>
      </div>
      <div className='Logo2'>
        <h1>
          <a href='/'>
            <img src={LogoColor} className='imgColor' alt='Logo-Color' />
          </a>
        </h1> */}
      </h1>
      <Nav />
    </HeadWrap>
  );
};

export default Head;
