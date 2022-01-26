import React from 'react';
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

const ResultShowTable = ({ datas, loading, handleSorting }) => {
  console.log(datas, 'ResultShowTable의 datas');

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
