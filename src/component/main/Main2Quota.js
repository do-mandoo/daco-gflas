import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';

const QuoataWrap = styled.section`
  /* background-color: #ddd; */
  h2 {
    display: inline-block;
    margin: 0px;
    margin-bottom: 5px;
    font-size: 22px;
    font-weight: 300;
    /* vertical-align: -2px; */
    span:nth-child(1) {
      font-weight: 500;
    }
    margin-right: 5px;
  }
  div > span {
    vertical-align: -2px;
  }
  .quotaChild {
    display: flex;
  }
  .quotaChild > div > input {
    max-width: 75px;
    font-size: 16px;
    line-height: 25px;
    padding: 5px 10px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    color: #495057;
  }

  .quotaText {
    margin-left: 10px;
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      margin-left: 16px;
    }
    li {
      margin-right: 60px;
    }
  }
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
        <div className='quotaChild'>
          <div>
            <input type='number' id='numberQuota' value='5' />
          </div>
          <div className='quotaText'>
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
