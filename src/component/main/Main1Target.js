import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaInfoCircle } from 'react-icons/fa';
import ExampleInputValue from '../dataEx/ExampleInputValue';

const TargetWrap = styled.section`
  /* background-color: #ccc; */
  /* padding-bottom: 10px; */
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
`;

const SelectOption = styled.article`
  /* background-color: tomato; */
  display: flex;
  margin-bottom: 5px;
`;

const ChooseInput = styled.article`
  /* background-color: skyblue; */
  display: none;
  input {
    font-size: 14px;
    width: 100%;
    padding: 6px 2px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    line-height: 20px;
    background-color: #e9ecef;
    /* border: 0; */
  }
`;

const TextArea = styled.article`
  /* background-color: yellowgreen; */
  /* display: none; */
  /* textarea {
    max-height: 140px;
    width: 300px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    resize: none;
    padding: 15px 20px;
    text-transform: uppercase;
  } */
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 40px;
  form {
    position: relative;
    .valueArea {
      height: 140px;
      width: 350px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 1.5px;
      /* resize: none; */
      padding: 15px 20px;
      text-transform: uppercase;
    }
    .enterValueBtn {
      margin-top: 5px;
      padding: 5px 0;
      width: 100px;
      position: absolute;
      bottom: -35px;
      right: 0;
    }
  }
  .showValueBlock {
    display: flex;
    flex-flow: column wrap;
    margin-left: 10px;
    .valueH {
      color: #fff;
      margin-top: -10px;
      margin-bottom: 5px;
    }
  }
  .showEnterValue {
    display: flex;
    flex-flow: column wrap;
    width: 300px;
    max-height: 120px;
    color: #eee;
    font-size: 15px;
    border: 1px solid #aaa;
    border-radius: 5px;
    div {
      display: list-item;
      list-style: inside;
      margin-left: 5px;
      color: skyblue;
      text-decoration: underline;
    }
  }
`;

const DropFile = styled.article`
  background-color: pink;
  display: none;
`;

const AcceptedTargetFormats = styled.article`
  /* background-color: orange; */
  /* width: 100%; */
  h5 {
    margin: 0;
    margin-bottom: 5px;
  }
  .acceptedChildBlock {
    display: flex;
    margin-left: 15px;
  }
  .zone {
    margin-right: 20px;
    flex-grow: 1;
  }
  .IDZone {
    /* background-color: skyblue; */
  }
  .SequenceZone {
    /* background-color: pink; */
    /* margin-right: 20px; */
    /* flex-grow: 1; */
  }
  .CoordinatiesZone {
    /* background-color: yellowgreen; */
    /* flex-grow: 1; */
    margin-right: 0;
  }
  .eachChild {
    line-height: 22px;
    span:nth-child(1) {
      /* color: red; */
      font-weight: 600;
      margin-right: 2px;
    }
    span:nth-child(2) {
      /* color: blue; */
      vertical-align: -2px;
    }
    div {
      font-size: 14px;
      margin-bottom: 8px;
    }
  }
`;

const Main1Target = ({ handleSubmit, postSequence, setPostSequence, data }) => {
  console.log('메인1타겟의 DATA', data);
  // const engOnly = /^[A-Z]/g; //영문자 대문자만 허용.
  const onChange = e => {
    const engOnly = /[^a-zA-Z]/g;
    const eletar = e.target;
    if (engOnly.test(eletar.value)) {
      eletar.value = eletar.value.replace(engOnly, '');
    }
    setPostSequence(eletar.value);
  };

  return (
    <TargetWrap>
      <div>
        <h2>Target(s)</h2>
        <SelectOption>
          <div>
            <input type='radio' id='targetLookup' name='targetOption' />
            <label htmlFor='targetLookup'>Quick lookup</label>
          </div>
          <div>
            <input type='radio' id='targetBulk' name='targetOption' />
            <label htmlFor='targetBulk'>Bulk</label>
          </div>
          <div>
            <input type='radio' id='targetUploadFile' name='targetOption' />
            <label htmlFor='targetUploadFile'>Upload file</label>
          </div>
        </SelectOption>
        <ChooseInput>
          <input autoComplete='off' placeholder='Choose a reference genome above to enable.' />
        </ChooseInput>
        <TextArea>
          <form onSubmit={handleSubmit}>
            <input
              className='valueArea'
              rows='10'
              // maxLength='1000'
              value={postSequence}
              // spellCheck='false'
              placeholder='Enter up to 500 target IDs.'
              onChange={onChange}
            />
            <button className='enterValueBtn' type='submit'>
              값 입력
            </button>
          </form>
          <div className='showValueBlock'>
            <div className='valueH'>입력된 값: </div>
            <div className='showEnterValue'>
              {data &&
                data.map(da => <div key={da.data.result}>{da.data.result.toUpperCase()}</div>)}
            </div>
          </div>
        </TextArea>
        <DropFile>
          <form>
            <div>drop file here or select a file</div>
            <input type='file' id='fileUpload' />
          </form>
          <div>
            <FaTrash />
          </div>
        </DropFile>
        <AcceptedTargetFormats>
          <div>Accepted target formats</div>
          <div className='acceptedChildBlock'>
            <div className='IDZone zone'>
              <h5>
                <u>ID</u>
              </h5>
              <div className='idChild1 eachChild'>
                <span>Gene Symbol</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>CDC5L, Brca1</div>
              </div>
              <div className='idChild2 eachChild'>
                <span>Gene ID</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>988</div>
              </div>
              <div className='idChild3 eachChild'>
                <span>Transcript ID</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>NM_014911,NM_014911.1</div>
              </div>
            </div>
            <div className='SequenceZone zone'>
              <h5>
                <u>Sequences</u>
              </h5>
              <div className='seqChild1 eachChild'>
                <span>Raw</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>TTGTAGCATCGCAGGTAGCAAACAGTTACTAGG</div>
              </div>
              <div className='seqChild2 eachChild'>
                <span>FASTA</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>
                  &gt;seq0
                  <br />
                  TTGTAGCATCGCAGGTAGCAAACAGTTACTAGG
                </div>
              </div>
            </div>
            <div className='CoordinatiesZone zone'>
              <h5>
                <u>Coordinates</u>
              </h5>
              <div className='coChild1 eachChild'>
                <span>Point</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>NC_000001.11:+:127140001</div>
              </div>
              <div className='coChild2 eachChild'>
                <span>Range</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>NC_000001.11:-:15000-16000</div>
              </div>
              <div className='coChild3 eachChild'>
                <span>Ranges</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>NC_000001.11:-:12000-13000;15000-16000</div>
              </div>
            </div>
          </div>
        </AcceptedTargetFormats>
      </div>
    </TargetWrap>
  );
};

export default Main1Target;
