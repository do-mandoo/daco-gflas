import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { navItemHead } from './NavbarItems';
import LogoColor from '../../image/gflasColor.png';
import LogoGray from '../../image/gflasGray.png';
import SubNav from './SubNav';

const HeadNavBlock = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeadWrap = styled.nav`
  display: flex;
  max-width: 1000px;
  justify-content: center;
  border-bottom: 1px solid #000;

  /*
  :hover li {
    color: #000;
  } */
  h1 {
    margin: 0;
    padding: 0;
  }
  .logo {
    display: inline-block;
    padding: 5px 50px;
    position: relative;
    :hover .imgColor {
      display: inline-block;
    }
  }
  .imgColor {
    display: none;
    position: absolute;
    padding: 5px 50px;
    top: 0;
    left: 0;
  }
`;

const NavWrap = styled.ul`
  color: #fff;
  display: flex;

  margin: 0;
  li {
    list-style: none;
  }
  li > a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    display: inline-block;
    padding: 25px 35px;
  }
  .navItems {
    :hover {
      color: #69f9f9;
      font-weight: bold;
    }
    :hover a {
      text-decoration: underline;
    }
  }
`;

const Head = () => {
  return (
    <HeadNavBlock>
      <HeadWrap>
        <h1 className='logo'>
          <Link to='./'>
            <img src={LogoGray} alt='Logo-Gray' />
          </Link>
          <Link to='./'>
            <img src={LogoColor} className='imgColor' alt='Logo-Color' />
          </Link>
        </h1>
        <NavWrap>
          {navItemHead.map(item => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </NavWrap>
      </HeadWrap>
    </HeadNavBlock>
  );
};

export default Head;
