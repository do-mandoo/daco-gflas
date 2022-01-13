import React from 'react';
import styled from 'styled-components';
import Main0Ref from '../component/main/Main0Ref';
import Main1Target from '../component/main/Main1Target';
import Main2Quota from '../component/main/Main2Quota';
import Main3Unpicked from '../component/main/Main3Unpicked';
import Main4EndBtn from '../component/main/Main4EndBtn';
import Side0Btn from '../component/side/Side0Btn';

const MainWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 3px 10px;
  /* align-items: center; */
  .wrapBlock {
    display: flex;
    max-width: 1100px;
    margin: 0 auto;
    /* margin: 0 50px; */
  }
  .leftWrap {
    background-color: rgba(108, 117, 125, 0.5);
    flex: 2;
  }
  .rightWrap {
    /* background-color: skyblue; */
    flex: 1;
    margin-left: 50px;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`;

const Main = () => {
  return (
    <MainWrap>
      <div className='wrapBlock'>
        <div className='leftWrap'>
          <Main0Ref />
          <Main1Target />
          <Main2Quota />
          <Main3Unpicked />
          <hr />
          <Main4EndBtn />
        </div>
        <div className='rightWrap'>
          <Side0Btn />
        </div>
      </div>
    </MainWrap>
  );
};

export default Main;
