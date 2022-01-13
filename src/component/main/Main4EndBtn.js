import React from 'react';
import styled from 'styled-components';

const EndBtnWrap = styled.section`
  /* background-color: pink; */
  .buttonBlock {
    display: flex;
    justify-content: space-between;
  }
`;

const Main4EndBtn = () => {
  return (
    <EndBtnWrap>
      <div>
        <div className='buttonBlock'>
          <div>
            <button>Clear All</button>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
        <div>Missing: Reference genome, Mechanism, Enzyme, Input targets.</div>
      </div>
    </EndBtnWrap>
  );
};

export default Main4EndBtn;
