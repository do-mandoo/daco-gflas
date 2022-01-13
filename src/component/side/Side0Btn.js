import React from 'react';
import styled from 'styled-components';

const SideWrap = styled.section`
  box-sizing: border-box;
  max-width: 400px;
  /* background-color: #aaa; */
  button {
    margin-right: 10px;
    width: 200px;
    padding: 10px 0;
  }
`;

const Side0Btn = () => {
  return (
    <SideWrap>
      <div>
        <div>
          <button>How to use CRISPick</button>
        </div>
        <div>
          <button>How CRISPick works</button>
        </div>
        <div>
          <button>FAQ</button>
        </div>
      </div>
    </SideWrap>
  );
};

export default Side0Btn;
