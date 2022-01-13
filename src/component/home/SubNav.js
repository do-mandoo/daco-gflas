import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { navItems1, navItems2 } from './NavbarItems';

const SubNavWrap = styled.div`
  /* display: flex;
  justify-content: flex-end; */
  /* width: 100%; */
  ul,
  li {
    list-style: none;
  }
  ul {
    background-color: #fff;
  }
  li {
    /* background-color: yellowgreen; */
    color: #000;
  }
  .subNavMenu {
    width: 100%;
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
  const [dropdown, setDropdown] = useState(false);
  return (
    <SubNavWrap>
      <ul
        className={dropdown ? 'subNavMenuClicked' : 'subNavMenu'}
        onClick={() => setDropdown(!dropdown)}
      >
        {navItems1.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })}
        {/* {navItems2.map(item => {
          return <li key={item.id}>{item.titie}</li>;
        })} */}
      </ul>
    </SubNavWrap>
  );
};

export default SubNav;
