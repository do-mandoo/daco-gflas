import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  background-color: #0079c2;
`;

const UserWrap = styled.div`
  /* background-color: tomato; */
  b {
    display: block;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderWrap>
        <div>
          <a href='https://google.com'>
            <h1>
              <span>CRIS</span>
              <span>Pick</span>
            </h1>
          </a>
        </div>
        <div>
          Ranks and picks candidate CRISPRko/a/i sgRNA sequences
          <br />
          to maximize on-target activity for target(s) provided.
        </div>
        <div>
          {/* <img
              src='https://portals.broadinstitute.org/gppx/crispick/versionedassets/images/logo_broad_gpp.svg'
              alt='broadinstituteIMG'
            /> */}
        </div>
      </HeaderWrap>
      <UserWrap>
        <div>
          <b>Job ID:</b>
          <b>Public User</b>
        </div>
        <div>
          <a href='https://google.com'>Changelog</a>
        </div>
      </UserWrap>
    </>
  );
};

export default Header;
