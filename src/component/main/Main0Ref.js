import React from 'react';
import styled from 'styled-components';

const RefWrap = styled.section`
  margin: 5px 0;
  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
  }
  display: flex;
  article {
    margin-right: 30px;
  }
  input {
    margin: 0;
    margin-right: 5px;
    width: 15px;
    height: 15px;
  }
  .casWrap,
  .modelsWrap {
    margin-right: 50px;
  }
  .casWrap > div,
  .modelsWrap > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Main0Ref = () => {
  return (
    <RefWrap>
      <div className='casWrap'>
        <h2>Cas9/12</h2>
        <div>
          <input type='radio' id='cas9' name='casCheck' />
          <label htmlFor='cas9'>Cas9</label>
        </div>
        <div>
          <input type='radio' id='cas12' name='casCheck' />
          <label htmlFor='cas12'>Cas12</label>
        </div>
      </div>
      <div className='modelsWrap'>
        <h2>Models</h2>
        <div>
          <input type='radio' id='tranceformer' name='modelsCheck' />
          <label htmlFor='tranceformer'>Transformer</label>
        </div>
        <div>
          <input type='radio' id='CNNBased' name='modelsCheck' />
          <label htmlFor='CNNBased'>CNN based</label>
        </div>
      </div>
    </RefWrap>
  );
};

export default Main0Ref;
