import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import client from '../../api/client';
// import Main1Target from '../main/Main1Target';
import ExampleInputValue from './ExampleInputValue';
import ExampleResult from './ExampleResult';
import ExampleShowResult from './ExampleShowResult';

const Example = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postSequence, setPostSequence] = useState('');
  // const [enterValue, setEnterValue] = useState('');

  const history = useHistory();

  // console.log(setData, 'setData111');

  // 데이터불러오기
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        console.log(1);
        const res = await client.get('/hello');
        console.log(res, 'res살펴보기');
        setData(res);
      } catch (error) {
        console.log(error, '데이터가져오기 오류');
      }
    };
    fetchDatas();
  }, []);

  // 검색
  useEffect(() => {
    const filterResult = data.filter(da => da.data.result.includes(search.toLowerCase()));
    setSearchResult(filterResult.reverse());
  }, [data, search]);

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
      const allPost = [...data, res];
      setData(allPost);
      // setSearch('');
      setPostSequence('');
      history.push('/');
    } catch (error) {
      console.log(error, '값 입력 조회 오류');
    }
  };
  // console.log(data, 'data111');

  return (
    <>
      <ExampleInputValue
        handleSubmit={handleSubmit}
        data={data}
        setData={setData}
        postSequence={postSequence}
        setPostSequence={setPostSequence}
      />
      <ExampleResult
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        // searchResult={searchResult}
        // setSearchResult={setSearchResult}
      />
      <ExampleShowResult searchResult={searchResult} />
    </>
  );
};

export default Example;
