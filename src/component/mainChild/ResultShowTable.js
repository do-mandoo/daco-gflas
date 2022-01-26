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

const ResultShowTable = ({ datas, setDatas, loading, setLoading, handleSorting }) => {
  console.log(datas, 'ㅋㅋㅋdatas');
  console.log(datas.length, '렝스');

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

  console.log(datas[0].data[8].grna.length, ' datasdddd');

  return (
    <>
      <ResultTable>
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSorting('grna')}>gRNA</th>
              <th onClick={() => handleSorting('pam')}>PAM</th>
              <th onClick={() => handleSorting('strand')}>Strand</th>
              <th onClick={() => handleSorting('score')}>DECO Score</th>
            </tr>
          </thead>
          <tbody>
            {/* {!loading ? renderTrTd() : <SpinnerIndex />} */}
            {/* {!loading || !datas ? ( */}
            {!loading ? (
              datas.map(data =>
                data.data.map(da => (
                  <tr key={da.index}>
                    <td>{da.grna}</td>
                    <td>{da.pam}</td>
                    <td>{da.strand}</td>
                    <td>{da.score}</td>
                  </tr>
                ))
              )
            ) : (
              <SpinnerIndex />
            )}
          </tbody>
        </table>
      </ResultTable>
    </>
  );
};

export default ResultShowTable;
