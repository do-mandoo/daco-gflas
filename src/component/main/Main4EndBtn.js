import React from 'react';
import styled from 'styled-components';

const EndBtnWrap = styled.section`
  /* background-color: #bbb; */
  button {
    display: block;
  }
`;

const Main4EndBtn = () => {
  return (
    <EndBtnWrap>
      <div>
        <div>
          <button>Clear All</button>
          <button>Submit</button>
        </div>
        <div>Missing: Reference genome, Mechanism, Enzyme, Input targets.</div>
      </div>
    </EndBtnWrap>
  );
};

export default Main4EndBtn;
