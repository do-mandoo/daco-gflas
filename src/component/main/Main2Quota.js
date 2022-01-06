import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';

const QuoataWrap = styled.section`
  /* background-color: #ddd; */
`;

const Main2Quota = () => {
  return (
    <QuoataWrap>
      <div>
        <h2>
          CRIS<span>Pick Quota</span>
        </h2>
        <span>
          <FaInfoCircle />
        </span>
        <div>
          <div>
            <input type='number' id='numberQuota' value='5' />
          </div>
          <div>
            This tool will recommend the top N candidates according to:
            <ul>
              <li>Raw ranking</li>
              <li>Cut position</li>
              <li>Multual spacing</li>
            </ul>
          </div>
        </div>
      </div>
    </QuoataWrap>
  );
};

export default Main2Quota;
