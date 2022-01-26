import React, { useState } from 'react';
import styled from 'styled-components';
import ResultShowTable from '../mainChild/ResultShowTable';

const TargetWrap = styled.section`
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
`;

const SelectOption = styled.article`
  display: flex;
  margin-bottom: 5px;
`;

const TextArea = styled.article`
  textarea {
    max-height: 140px;
    width: 300px;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1.5px;
    resize: none;
    padding: 15px 20px;
    text-transform: uppercase;
  }
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
      resize: none;
      padding: 15px 20px;
      text-transform: uppercase;
    }
    .enterValueBtn {
      margin-top: 5px;
      padding: 5px 0;
      width: 100px;
      position: absolute;
      bottom: 4px;
      right: -110px;
    }
  }
  .showValueBlock {
    display: flex;
    flex-flow: column wrap;
    margin-left: 10px;
    width: 200px;
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

const Main1Target = ({
  handleSubmit,
  postSequence,
  setPostSequence,
  datas,
  setDatas,
  loading,
  setLoading,
}) => {
  console.log('메인1타겟의 DATA', datas);

  // const engOnly = /^[A-Z]/g; //영문자 대문자만 허용.
  const onChange = e => {
    const engOnly = /[^a-zA-Z]/g;
    const eletar = e.target;
    if (engOnly.test(eletar.value)) {
      eletar.value = eletar.value.replace(engOnly, '');
    }
    setPostSequence(eletar.value);
  };

  const [order, setOrder] = useState('ASC');

  // 오름차순 내림차순 정렬
  const handleSorting = col => {
    console.log(datas, 'datas의data');
    if (order === 'ASC') {
      const data = datas[0].data.sort((a, b) => (a[col] > b[col] ? 1 : -1));
      console.log(data, 'sorted');
      setDatas([{ data }]);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const data = datas[0].data.sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setDatas([{ data }]);
      setOrder('ASC');
    }
    console.log(datas, 'sort후의 datas');
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
        <TextArea>
          <form onSubmit={handleSubmit}>
            <textarea
              className='valueArea'
              rows='10'
              // // maxLength='1000'
              value={postSequence}
              spellCheck='false'
              placeholder='영문만 입력이 가능합니다. 입력이 안 될 경우 한/영 키를 누른 뒤 다시 입력해주세요.'
              onChange={onChange}
            />
            <button className='enterValueBtn' type='submit'>
              값 입력
            </button>
          </form>
          <div className='showValueBlock'></div>
        </TextArea>
        {datas && (
          <ResultShowTable
            datas={datas}
            setDatas={setDatas}
            loading={loading}
            setLoading={setLoading}
            handleSorting={handleSorting}
          />
        )}
      </div>
    </TargetWrap>
  );
};

export default Main1Target;
