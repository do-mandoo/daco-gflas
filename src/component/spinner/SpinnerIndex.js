import React from 'react';
import { CircleLoader, ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

const SpinnerWrap = styled.div`
  div {
    margin-bottom: 10px;
  }
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50px;
  left: 300px;
`;

const SpinnerIndex = () => {
  return (
    <>
      <SpinnerWrap>
        <div>결과 분석 중...</div>
        <ScaleLoader />
      </SpinnerWrap>
    </>
  );
};

export default SpinnerIndex;
