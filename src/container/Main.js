import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import client from '../api/client';
import Main0Ref from '../component/main/Main0Ref';
import Main1Target from '../component/main/Main1Target';
import Main2Quota from '../component/main/Main2Quota';
import Main3Unpicked from '../component/main/Main3Unpicked';
import Main4EndBtn from '../component/main/Main4EndBtn';
import Side0Btn from '../component/side/Side0Btn';

const MainWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 3px 10px;
  /* align-items: center; */
  .wrapBlock {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    /* max-width: 1100px; */
    /* margin: 0 auto; */
    /* margin: 0 50px; */
  }
  .leftWrap {
    background-color: rgba(108, 117, 125, 0.5);
    width: 1100px;
    /* flex: 2; */
  }
  /* .rightWrap {
     background-color: skyblue;
    flex: 1;
    margin-left: 50px;
  } */
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`;

const Main = () => {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postSequence, setPostSequence] = useState('');

  const [loading, setLoading] = useState(false);

  // const [order, setOrder] = useState('ASC');

  const history = useHistory();

  // 정보입력
  const handleSubmit = async e => {
    setLoading(true);
    e.preventDefault();
    // const id = data.length ? data[data.length - 1].id + 1 : 1;
    const searchingData = {
      sequences: postSequence,
    };
    try {
      const res = await client.post('/hello', searchingData);
      console.log(res, 'res를 봅시다. example 55번줄');
      const allPost = [res];
      setDatas(allPost);
      // setSearch('');
      // setPostSequence('');
      history.push('/');
    } catch (error) {
      console.log(error, '값 입력 조회 오류');
    }
    setLoading(false);
  };

  // const [order, setOrder] = useState('ASC');

  // 오름차순 내림차순 정렬
  // const handleSorting = col => {
  //   if (order === 'ASC') {
  //     [...datas].sort((a, b) => (a[col.key] > b[col.key] ? 1 : -1));
  //     // setDatas(sorted);
  //     setOrder('DSC');
  //   }
  //   if (order === 'DSC') {
  //     [...datas].sort((a, b) => (a[col] < b[col] ? 1 : -1));
  //     // setDatas(sorted);
  //     setOrder('ASC');
  //   }
  //   console.log(datas, 'sort후의 datas');
  //   return 0;
  // };

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
            // handleSorting={handleSorting}
          />
          {/* <Main2Quota />
          <Main3Unpicked />
          <hr />
          <Main4EndBtn /> */}
        </div>
        {/* <div className='rightWrap'>
          <Side0Btn />
        </div> */}
      </div>
    </MainWrap>
  );
};

export default Main;
