import React from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  /* background-color: tomato; */
  .copyright {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <FooterWrap>
      <div>
        {/* <img
            src='https://portals.broadinstitute.org/gppx/crispick/versionedassets/images/logo_broad.svg'
            alt='BROAD INSTITUTE'
          /> */}
      </div>
      <div>
        <div>
          <a href='https://google.com'>Contact Us</a>
        </div>
        <div>
          <a href='https://google.com'>GPP Web Portal</a>
        </div>
      </div>
      <div className='copyright'>
        Copyright © 2020 Broad Institute. <br /> All rights reserved.
      </div>
    </FooterWrap>
  );
};

export default Footer;
