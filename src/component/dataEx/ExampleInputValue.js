import React from 'react';
import styled from 'styled-components';

const InputValue = styled.div`
  max-width: 400px;
  height: 100px;
  background-color: #ccc;
`;

const ExampleInputValue = ({ handleSubmit, postSequence, setPostSequence }) => {
  // console.log(postSequence, '시퀀스');
  return (
    <InputValue>
      <form onSubmit={handleSubmit}>
        <input
          value={postSequence}
          type='text'
          placeholder='값을 입력하세요.'
          required
          onChange={e => setPostSequence(e.target.value)}
        />
        <button type='submit'>값 입력</button>
      </form>
      <div>
        입력된 값 보여주기
        {/* <div>{setPostSequence.map(data => data.sequences)}</div> */}
      </div>
    </InputValue>
  );
};

export default ExampleInputValue;
