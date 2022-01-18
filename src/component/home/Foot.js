import React from 'react';
import styled from 'styled-components';
import LogoFooter from '../../image/logoFooter.png';

const FootWrap = styled.div`
  box-sizing: border-box;
  /* overflow: hidden; */
  width: 100%;
  height: 230px;
  background-color: #333;
  .footerBlock {
    display: flex;
    flex-flow: row nowrap;
    margin: 0 auto;
    max-width: 1100px;
    padding: 60px 0;
  }
  .infoBlock {
    margin-left: 20px;
    color: #aaa;
  }
  .copyRight {
    line-height: 60px;
    color: #666;
  }
`;

const Foot = () => {
  return (
    <FootWrap>
      <div className='footerBlock'>
        <div className='imgBlock'>
          <img src={LogoFooter} alt='Logo-Footer' />
        </div>
        <div className='infoBlock'>
          <div>
            서울특별시 관악구 낙성대로 38 낙성대 R&D 센터 1층 (우 08790) ㅣ Suite 1F, 38
            Nakseongdae-ro, Gwanak-Gu, Seoul 08790, Korea
          </div>
          <div>TEL 02-872-2202 ㅣ E-Mail thanks@gflas.com</div>
          <div className='copyRight'>
            Copyright (c) 2021 ㈜지플러스생명과학® G+FLAS® All rights reserved
          </div>
        </div>
      </div>
    </FootWrap>
  );
};

export default Foot;
