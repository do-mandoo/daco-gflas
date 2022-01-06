import React from 'react';
import styled from 'styled-components';

const SideWrap = styled.section`
  button {
    margin-right: 10px;
  }
`;

const Side0Btn = () => {
  return (
    <SideWrap>
      <div>
        {/* <div> */}
        <button>How to use CRISPick</button>
        {/* </div> */}
        {/* <div> */}
        <button>How CRISPick works</button>
        {/* </div> */}
        {/* <div> */}
        <button>FAQ</button>
        {/* </div> */}
      </div>
    </SideWrap>
  );
};

export default Side0Btn;
