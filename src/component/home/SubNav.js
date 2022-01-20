import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { navItems1, navItems2, navItems3, navItems4 } from './NavbarItems';

const SubNavWrap = styled.div`
  ul,
  li {
    list-style: none;
  }
  .subNavMenu,
  .subNavMenuClicked {
    position: relative;
    background-color: #fff;
    display: flex;
    justify-content: center;
    padding-bottom: 5px;
    /* position: relative; */
  }
  li {
    color: #000;
  }
  .subNavLists {
    display: flex;
    /* background-color: red; */
    margin-left: 190px;
  }
  .subNavList {
    /* background-color: green; */
  }
  .subNavMenu {
    width: 100%;
    /* height: 400px; */
    position: absolute;
    top: 53px;
    left: 0;
  }
  .subNavMenuClicked {
    display: none;
  }
  li:hover {
    /* background-color: tomato; */
    cursor: pointer;
  }
`;

const SubNav = () => {
  return (
    <SubNavWrap>
      <ul className='subNavMenu'>
        <li className='subNavLists'>
          <ul className='subNavList'>
            {navItems1.map(item => {
              return (
                <li className='list1' key={item.id}>
                  {item.title}
                </li>
              );
            })}
          </ul>
          <ul>
            {navItems2.map(item => {
              return (
                <li className='list2' key={item.id}>
                  {item.title}
                </li>
              );
            })}
          </ul>
          <ul>
            {navItems3.map(item => {
              return (
                <li className='list3' key={item.id}>
                  {item.title}
                </li>
              );
            })}
          </ul>
          <ul>
            {navItems4.map(item => {
              return (
                <li className='list4' key={item.id}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </SubNavWrap>
  );
};

export default SubNav;
