import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import client from '../api/client';
import Main0Ref from '../component/main/Main0Ref';
import Main1Target from '../component/main/Main1Target';

const MainWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 3px 10px;
  .wrapBlock {
    display: flex;
    justify-content: center;
  }
  .leftWrap {
    background-color: rgba(108, 117, 125, 0.5);
    width: 1100px;
  }
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`;

const Main = () => {
  const [datas, setDatas] = useState([]);
  const [postSequence, setPostSequence] = useState('');

  const [loading, setLoading] = useState(false);

  const history = useHistory();

  // 정보입력
  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    const searchingData = {
      sequences: postSequence,
    };
    try {
      const res = await client.post('/hello', searchingData);
      console.log(res, 'res를 봅시다. example 55번줄');
      const allPost = [res];
      setDatas(allPost);
      history.push('/');
    } catch (error) {
      console.log(error, '값 입력 조회 오류');
    }
    setLoading(false);
  };

  return (
    <MainWrap>
      <div className='wrapBlock'>
        <div className='leftWrap'>
          <Main0Ref />
          <Main1Target
            handleSubmit={handleSubmit}
            datas={datas}
            setDatas={setDatas}
            postSequence={postSequence}
            setPostSequence={setPostSequence}
            loading={loading}
            setLoading={setLoading}
          />
        </div>
      </div>
    </MainWrap>
  );
};

export default Main;
