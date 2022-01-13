import React from 'react';
import styled from 'styled-components';

const RefWrap = styled.section`
  margin: 5px 0;
  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
  }
  /* background-color: #eee; */
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
  label > span {
    margin-left: 3px;
    font-size: 12px;
    /* color: #6c757d; */
  }
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const Reference = styled.article`
  /* background-color: yellowgreen; */
`;

const Mechanism = styled.article`
  /* background-color: skyblue; */
`;

const Enzyme = styled.article`
  /* background-color: #aaa; */
`;

const Main0Ref = () => {
  return (
    <RefWrap>
      <Reference>
        <h2>Reference Genome</h2>
        <div>
          <input type='radio' id='ref0' name='refCheck' />
          <label for='ref0'>
            Human GRCh38<span>(NCBI RefSeq v.109.20210514)</span>
          </label>
        </div>
        <div>
          <input type='radio' id='ref1' name='refCheck' />
          <label for='ref1'>
            Human GRCh38<span>(Ensembl v.104))</span>
          </label>
        </div>
        <div>
          <input type='radio' id='ref2' name='refCheck' />
          <label for='ref2'>
            Human GRCh37<span>(NCBI RefSeq v.105.20201022)</span>
          </label>
        </div>
        <div>
          <input type='radio' id='ref3' name='refCheck' />
          <label for='ref3'>
            Mouse GRCm38 <sapn>(NCBI RefSeq v.108)</sapn>
          </label>
        </div>
        <div>
          <input type='radio' id='ref4' name='refCheck' />
          <label for='ref4'>
            Mouse GRCm38 <span>(Ensembl v.102)</span>
          </label>
        </div>
        <div>
          <input type='radio' id='ref5' name='refCheck' />
          <label for='ref5'>
            Rat Rnor_6.0 <span>(NCBI RefSeq v.106)</span>
          </label>
        </div>
      </Reference>
      <Mechanism>
        <h2>Mechanism</h2>
        <div>
          <input type='radio' id='mec0' name='mecCheck' />
          <label for='mec0'>CRISPRko</label>
        </div>
        <div>
          <input type='radio' id='mec1' name='mecCheck' />
          <label for='mec1'>CRISPRa</label>
        </div>
        <div>
          <input type='radio' id='mec2' name='mecCheck' />
          <label for='mec2'>CRISPRi</label>
        </div>
      </Mechanism>
      <Enzyme>
        <h2>Enzyme</h2>
        <div>
          <input type='radio' id='enz0' name='enzymeCheck' />
          <label for='enz0'>
            SpyoCas9<span>(NGG)</span>
          </label>
        </div>
        <div>
          <input type='radio' id='enz1' name='enzymeCheck' />
          <label for='enz1'>
            SaurCas9<span>(NNGRR)</span>
          </label>
        </div>
        <div>
          <input type='radio' id='enz2' name='enzymeCheck' />
          <label for='enz2'>
            AsCas12a<span>(TTTV)</span>
          </label>
        </div>
        <div>
          <input type='radio' id='enz3' name='enzymeCheck' />
          <label for='enz3'>enAsCas12a</label>
        </div>
      </Enzyme>
    </RefWrap>
  );
};

export default Main0Ref;
