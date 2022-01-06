import React from 'react';
import styled from 'styled-components';
import { FaTrash, FaInfoCircle } from 'react-icons/fa';

const TargetWrap = styled.section`
  /* background-color: #ccc; */
  padding-bottom: 10px;
`;

const SelectOption = styled.article`
  /* background-color: tomato; */
`;

const ChooseInput = styled.article`
  /* background-color: skyblue; */
`;

const TextArea = styled.article`
  /* background-color: yellowgreen; */
`;

const DropFile = styled.article`
  /* background-color: pink; */
`;

const AcceptedTargetFormats = styled.article`
  /* background-color: orange; */
  .IDZone {
    /* border: 1px solid blue; */
  }
  .SequenceZone {
    /* border: 1px solid red; */
  }
  .CoordinatiesZone {
    /* border: 1px solid black; */
  }
`;

const Main1Target = () => {
  return (
    <TargetWrap>
      <div>
        <h2>Target(s)</h2>
        <SelectOption>
          <div>
            <input type='radio' id='targetLookup' />
            <label for='targetLookup'>Quick lookup</label>
          </div>
          <div>
            <input type='radio' id='targetLookup' />
            <label for='targetLookup'>Bulk</label>
          </div>
          <div>
            <input type='radio' id='targetLookup' />
            <label for='targetLookup'>Upload file</label>
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
          <div>
            <div className='IDZone'>
              <h5>
                <u>ID</u>
              </h5>
              <div>
                <span>Gene Symbol</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>CDC5L, Brca1</div>
              </div>
              <div>
                <span>Gene ID</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>988</div>
              </div>
              <div>
                <span>Transcript ID</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>
                  NM_014911,
                  <br />
                  NM_014911.1
                </div>
              </div>
            </div>
            <div className='SequenceZone'>
              <h5>
                <u>Sequences</u>
              </h5>
              <div>
                <span>Raw</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>TTGTAGCATCGCAGGTAGCAAACAGTTACTAGG</div>
              </div>
              <div>
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
            <div className='CoordinatiesZone'>
              <h5>
                <u>Coordinates</u>
              </h5>
              <div>
                <span>Point</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>NC_000001.11:+:127140001</div>
              </div>
              <div>
                <span>Range</span>
                <span>
                  <FaInfoCircle />
                </span>
                <div>NC_000001.11:-:15000-16000</div>
              </div>
              <div>
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
