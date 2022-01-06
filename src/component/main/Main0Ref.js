import React from 'react';
import styled from 'styled-components';

const RefWrap = styled.section`
  margin: 10px 0;
  /* background-color: #ddd; */
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
      <div>
        <Reference>
          <h2>Reference Genome</h2>
          <div>
            <input type='radio' id='ref0' />
            <label for='ref0'>
              Human GRCh38<span>(NCBI RefSeq v.109.20210514)</span>
            </label>
          </div>
          <div>
            <input type='radio' id='ref1' />
            <label for='ref1'>
              Human GRCh38<span>(Ensembl v.104))</span>
            </label>
          </div>
          <div>
            <input type='radio' id='ref2' />
            <label for='ref2'>
              Human GRCh37<span>(NCBI RefSeq v.105.20201022)</span>
            </label>
          </div>
          <div>
            <input type='radio' id='ref3' />
            <label for='ref3'>
              Mouse GRCm38 <sapn>(NCBI RefSeq v.108)</sapn>
            </label>
          </div>
          <div>
            <input type='radio' id='ref4' />
            <label for='ref4'>
              Mouse GRCm38 <span>(Ensembl v.102)</span>
            </label>
          </div>
          <div>
            <input type='radio' id='ref5' />
            <label for='ref5'>
              Rat Rnor_6.0 <span>(NCBI RefSeq v.106)</span>
            </label>
          </div>
        </Reference>
        <Mechanism>
          <h2>Mechanism</h2>
          <div>
            <input type='radio' id='mec0' />
            <label for='mec0'>CRISPRko</label>
          </div>
          <div>
            <input type='radio' id='mec0' />
            <label for='mec0'>CRISPRa</label>
          </div>
          <div>
            <input type='radio' id='mec0' />
            <label for='mec0'>CRISPRi</label>
          </div>
        </Mechanism>
        <Enzyme>
          <h2>Enzyme</h2>
          <div>
            <input type='radio' id='enz0' />
            <label for='enz0'>
              SpyoCas9<span>(NGG)</span>
            </label>
          </div>
          <div>
            <input type='radio' id='enz0' />
            <label for='enz0'>
              SaurCas9<span>(NNGRR)</span>
            </label>
          </div>
          <div>
            <input type='radio' id='enz0' />
            <label for='enz0'>
              AsCas12a<span>(TTTV)</span>
            </label>
          </div>
          <div>
            <input type='radio' id='enz0' />
            <label for='enz0'>enAsCas12a</label>
          </div>
        </Enzyme>
      </div>
    </RefWrap>
  );
};

export default Main0Ref;
