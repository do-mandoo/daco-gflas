import React from 'react';
import styled from 'styled-components';

const UnPickedWrap = styled.section`
  /* background-color: yellowgreen; */
  margin: 15px 0 8px 0;
  input {
    margin-right: 10px;
  }
`;

const Main3Unpicked = () => {
  return (
    <UnPickedWrap>
      <div>
        <div>
          <input type='checkbox' id='inputUnpicked' />
          <label htmlFor='inputUnpicked'>Report unpicked sequences?</label>
        </div>
      </div>
    </UnPickedWrap>
  );
};

export default Main3Unpicked;
