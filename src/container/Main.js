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
    max-width: 1100px;
    margin: 0 auto;
    /* margin: 0 50px; */
  }
  .leftWrap {
    background-color: rgba(108, 117, 125, 0.5);
    flex: 2;
  }
  .rightWrap {
    /* background-color: skyblue; */
    flex: 1;
    margin-left: 50px;
  }
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

  const history = useHistory();

  // // 데이터불러오기
  // useEffect(() => {
  //   const fetchDatas = async () => {
  //     try {
  //       console.log(1);
  //       const res = await client.get('/hello');
  //       console.log(res, 'res살펴보기');
  //       setData(res);
  //     } catch (error) {
  //       console.log(error, '데이터가져오기 오류');
  //     }
  //   };
  //   fetchDatas();
  // }, []);

  // 검색
  // useEffect(() => {
  //   const filterResult = data.filter(da => da.data.result.includes(search.toLowerCase()));
  //   setSearchResult(filterResult.reverse());
  // }, [data, search]);

  // 정보입력
  const handleSubmit = async e => {
    e.preventDefault();
    // const id = data.length ? data[data.length - 1].id + 1 : 1;
    const searchingData = {
      sequences: postSequence,
    };
    try {
      const res = await client.post('/hello', searchingData);
      console.log(res, 'res를 봅시다. example 55번줄');
      const allPost = [...datas, res];
      setDatas(allPost);
      // setSearch('');
      setPostSequence('');
      history.push('/');
    } catch (error) {
      console.log(error, '값 입력 조회 오류');
    }
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
          />
          {/* <Main2Quota />
          <Main3Unpicked />
          <hr />
          <Main4EndBtn /> */}
        </div>
        <div className='rightWrap'>
          <Side0Btn />
        </div>
      </div>
    </MainWrap>
  );
};

export default Main;
