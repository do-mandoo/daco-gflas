import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SpinnerIndex from '../spinner/SpinnerIndex';

const ResultTable = styled.article`
  box-sizing: border-box;
  max-width: 800px;
  max-height: 500px;
  background-color: #fff;
  min-height: 300px;
  margin-bottom: 20px;
  overflow: scroll;
  width: 100%;
  th {
    border-bottom: 2px solid #000;
    padding: 10px 0;
    /* margin: 0; */
    cursor: pointer;
  }
  th:nth-child(1) {
    min-width: 250px;
  }
  th:nth-child(2) {
    min-width: 120px;
  }
  th:nth-child(3) {
    min-width: 130px;
  }
  th:nth-child(4) {
    min-width: 173px;
  }
  td {
    border-bottom: 1px dashed #aaa;
    padding: 3px 5px;
    /* overflow: scroll; */
  }
  tbody {
    position: relative;
  }
`;

const ResultShowTable = ({ datas, loading, setLoading }) => {
  // 한땀한땀 우왕좌왕 로직.
  console.log(datas, 'ㅋㅋㅋdatas');
  console.log(datas.length, '렝스');

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

  const renderTrTd = () => {
    try {
      if (datas.length === 0) {
        console.log('datas없음');
        return null;
      } else {
        console.log('datas있음.');

        let datasLength = datas.length;
        console.log(datasLength, 'datas길이');

        let countLength = datas[datas.length - 1].data.grna.length;
        console.log(countLength, 'count길이');

        let setArrayFor = [];
        for (let j = 0; j < datasLength; j++) {
          for (let i = 0; i < countLength; i++) {
            setArrayFor.push(
              <tr key={datas[j].data.grna.index}>
                <td>{datas[j].data.grna[i]}</td>
                <td>{datas[j].data.pam[i]}</td>
                <td>{datas[j].data.strand[i]}</td>
                <td>{datas[j].data.score[i]}</td>
              </tr>
            );
          }
        }
        console.log('setArrayFor', setArrayFor);
        return setArrayFor;
      }
    } catch (error) {
      console.log(error, 'loading&한땀가져오기 에러');
    }
  };

  return (
    <>
      <ResultTable>
        <table>
          <thead>
            <tr>
              <th>gRNA</th>
              <th>PAM</th>
              <th>Strand</th>
              <th>DECO Score</th>
            </tr>
          </thead>
          <tbody>
            {/* {datas !== 0 && renderTrTd()} */}
            {!loading ? renderTrTd() : <SpinnerIndex />}
          </tbody>
        </table>
      </ResultTable>
    </>
  );
};

export default ResultShowTable;
