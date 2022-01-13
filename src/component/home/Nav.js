import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { navItemHead } from './NavbarItems';
import SubNav from './SubNav';

const NavWrap = styled.ul`
  color: #fff;
  display: flex;
  position: relative;
  /* background-color: #dfa968; */
  :hover {
    background-color: #fff;
    color: #000;
  }
  margin: 0;
  li {
    list-style: none;
    /* background-color: blue; */
    /* line-height: 47px; */
    /* height: 16vh; */
    /* align-items: center;
    text-align: center; */
  }
  li > a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    display: inline-block;
    padding: 25px;
    /* padding: 10px 20px; */
    /* align-items: center; */
  }
  ul:hover {
    background-color: #fff;
  }
  /* .subLists {
    background-color: #fff;
    color: #000;
  }
  .subLists > li {
    display: none;
    width: 100%;
    height: 313px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    transition: 0.3s;
  } */
`;

// const NavHoverWrap = styled.div``;

const Nav = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <NavWrap>
        {/* <ul className='allLists'> */}
        {navItemHead.map(item => {
          return (
            <li
              key={item.id}
              className={item.cName}
              onMouseEnter={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              <Link to={item.path}>{item.title}</Link>
              {/* {item.title} */}
              {/* {dropdown && <SubNav />} */}
            </li>
          );
        })}

        {/* <li>
          <a href='.'>유전자가위 기술</a>
          <ul className='subLists'>
            <li>
              <a href='/'>CRISPR Gene Edition</a>
            </li>
            <li>
              <a href='/'>CRISPR PLUS</a>
            </li>
            <li>
              <a href='/'>gfCas12a</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='.'>사업분야</a>
          <ul className='subLists'>
            <li>
              <a href='/'>Cancerase®</a>
            </li>
            <li>
              <a href='/'>PDB Platform</a>
            </li>
            <li>
              <a href='/'>Non-GMO Edition</a>
            </li>
            <li>
              <a href='/'>Popeline</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='.'>회사소개</a>
          <ul className='subLists'>
            <li>
              <a href='/'>회사소개</a>
            </li>
            <li>
              <a href='/'>특허현황</a>
            </li>
            <li>
              <a href='/'>연혁</a>
            </li>
            <li>
              <a href='/'>리더십</a>
            </li>
            <li>
              <a href='/'>홍보영상</a>
            </li>
            <li>
              <a href='/'>오시는 길</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='.'>알림마당</a>
          <ul className='subLists'>
            <li>
              <a href='/'>IR 공고·공시</a>
            </li>
            <li>
              <a href='/'>공지 및 안내</a>
            </li>
            <li>
              <a href='/'>보도자료</a>
            </li>
            <li>
              <a href='/'>인재채용</a>
            </li>
            <li>
              <a href='/'>사업개발</a>
            </li>
          </ul>
        </li> */}
        {/* </ul> */}
      </NavWrap>
      {dropdown && <SubNav />}
    </>
  );
};

export default Nav;
