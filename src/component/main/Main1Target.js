import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaInfoCircle } from 'react-icons/fa';

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
  background-color: yellowgreen;
  display: none;
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

const Main1Target = () => {
  return (
    <TargetWrap>
      <div>
        <h2>Target(s)</h2>
        <SelectOption>
          <div>
            <input type='radio' id='targetLookup' name='targetOption' />
            <label for='targetLookup'>Quick lookup</label>
          </div>
          <div>
            <input type='radio' id='targetBulk' name='targetOption' />
            <label for='targetBulk'>Bulk</label>
          </div>
          <div>
            <input type='radio' id='targetUploadFile' name='targetOption' />
            <label for='targetUploadFile'>Upload file</label>
          </div>
        </SelectOption>
        <ChooseInput>
          <input autocomplete='off' placeholder='Choose a reference genome above to enable.' />
        </ChooseInput>
        <TextArea>
          <textarea rows='10' placeholder='Enter up to 500 target IDs.'></textarea>
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
