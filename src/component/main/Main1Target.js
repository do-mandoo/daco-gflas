import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrash, FaInfoCircle } from 'react-icons/fa';
import { useEffect } from 'react';
import client from '../../api/client';
// import ExampleInputValue from '../dataEx/ExampleInputValue';

const TargetWrap = styled.section`
  /* background-color: #ccc; */
  /* padding-bottom: 10px; */
  h2 {
    margin: 0;
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 500;
  }
`;

const SelectOption = styled.article`
  /* background-color: tomato; */
  display: flex;
  margin-bottom: 5px;
`;

const TextArea = styled.article`
  /* background-color: yellowgreen; */
  /* display: none; */
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

const ResultTable = styled.article`
  box-sizing: border-box;
  max-width: 800px;
  background-color: #fff;
  min-height: 300px;
  margin-bottom: 20px;
  overflow: scroll;
  th {
    border-bottom: 2px solid #000;
    padding: 10px 0;
    /* margin: 0; */
    width: 140px;
  }
  td {
    border-bottom: 1px dashed #aaa;
    padding: 3px 5px;
    width: 200px;
    /* overflow: scroll; */
  }
`;

const Main1Target = ({ handleSubmit, postSequence, setPostSequence, data }) => {
  console.log('메인1타겟의 DATA', data);

  // const engOnly = /^[A-Z]/g; //영문자 대문자만 허용.
  const onChange = e => {
    const engOnly = /[^a-zA-Z]/g;
    const eletar = e.target;
    if (engOnly.test(eletar.value)) {
      eletar.value = eletar.value.replace(engOnly, '');
    }
    setPostSequence(eletar.value);
  };

  // const arrayHName = data[0].data;
  // console.log(arrayHName, 3434);

  const renderTrTd = () => {
    let countLength = data[0].data.grna.length;
    console.log(countLength, 'count,길이');

    const newArray = ['grna', 'pam', 'score', 'strand'];
    console.log(newArray, 'newarray304934');

    for (let i = 0; i < countLength; i++) {
      console.log(data[0].data.grna[i], 'i9222222240');
      <tr>
        <td>{data[0].data.grna[i]}</td>
        <td>{data[0].data.pam[i]}</td>
        <td>{data[0].data.strand[i]}</td>
        <td>{data[0].data.score[i]}</td>
      </tr>;
    }

    // for (let i = 0; i < countLength; i++) {
    // console.log(i, 'i--?'); // index 0 1 2 3 4 5
    // for (let j = 0; (j = i); j++) {
    // console.log(j, 'j00?');
    // return (
    //   <>
    //     <tr>
    //       <td>{data[0].data.grna[j]}</td>
    //       <td>{data[0].data.pam[i]}</td>
    //       <td>{data[0].data.strand[j]}</td>
    //       <td>{data[0].data.score[j]}</td>
    //     </tr>
    //   </>
    // );
    // }
    // }
  };

  const [loading, setLoading] = useState(false);

  // 대기중일 떄
  if (loading) {
    return;
  }

  /* 아직 gflasDataArticle값이 설정되지 않았을 때. === 유효하지 않을 때
    // <ResultTable/>에 {gflasDataArticles? '':null}로 삼항조건연산자를 사용함. 둘 다 같은 의미라고 생각했기 때문.
  if (!gflasDataArticles) {
    return null;
  } */

  // gflasDataArticle값이 유효할 때
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
          <div className='showValueBlock'>
            {/* <div className='valueH'>결과 값: </div> */}
            {/* <div className='showEnterValue'>
              {data &&
                data.map(da => <div key={da.data.result}>{da.data.result.toUpperCase()}</div>)}
            </div> */}
          </div>
        </TextArea>
        {loading ? (
          <ResultTable>데이터 가져오기 로딩 중...</ResultTable>
        ) : (
          <ResultTable>
            {/* gflasDataArticle값이 유효하면 테이블을 보여주고, 아니라면 null을 반환한다. */}
            {data ? (
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
                  {/* <tr>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                    <td>aaa</td>
                  </tr> */}
                  {/* <td>데이터값이 유효하면 map배열 연산자로 풀어서 그려주기. 위 아래의</td>의 축약. */}
                  {/* {data.map(da => {
                    return (
                      <>
                        <tr>
                          {da.data.grna.map(grna => {
                            return <td>{grna}</td>;
                          })}
                          {da.data.pam.map(pam => {
                            return <td>{pam}</td>;
                          })}
                          {da.data.strand.map(strand => {
                            return <td>{strand}</td>;
                          })}
                          {da.data.score.map(score => {
                            return <td>{score}</td>;
                          })}
                        </tr>

                        <td>{da.data.strand}</td>
                        <td>{da.data.score}</td>
                        {da.data.score.map(pa => {
                          console.log(pa, 'paooaopap');
                          <td>{pa}</td>;
                        })}
                      </>
                    );
                  })} */}
                  {data.map(da => {
                    console.log(da, 'dadada');
                    return (
                      <>
                        {renderTrTd()}

                        {/* <tr>
                          {da.map(d => {
                            console.log(d);
                            return <td>{d.data}</td>;
                          })}
                        </tr> */}
                        {/* <tr>
                          <td>{da.data.grna[1]}</td>
                          <td>{da.data.pam[1]}</td>
                          <td>{da.data.strand[1]}</td>
                          <td>{da.data.score[1]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[2]}</td>
                          <td>{da.data.pam[2]}</td>
                          <td>{da.data.strand[2]}</td>
                          <td>{da.data.score[2]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[3]}</td>
                          <td>{da.data.pam[3]}</td>
                          <td>{da.data.strand[3]}</td>
                          <td>{da.data.score[3]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[4]}</td>
                          <td>{da.data.pam[4]}</td>
                          <td>{da.data.strand[4]}</td>
                          <td>{da.data.score[4]}</td>
                        </tr> */}
                        {/* <tr>
                          <td>{da.data.grna[5]}</td>
                          <td>{da.data.pam[5]}</td>
                          <td>{da.data.strand[5]}</td>
                          <td>{da.data.score[5]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[6]}</td>
                          <td>{da.data.pam[6]}</td>
                          <td>{da.data.strand[6]}</td>
                          <td>{da.data.score[6]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[7]}</td>
                          <td>{da.data.pam[7]}</td>
                          <td>{da.data.strand[7]}</td>
                          <td>{da.data.score[7]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[8]}</td>
                          <td>{da.data.pam[8]}</td>
                          <td>{da.data.strand[8]}</td>
                          <td>{da.data.score[8]}</td>
                        </tr>
                        <tr>
                          <td>{da.data.grna[9]}</td>
                          <td>{da.data.pam[9]}</td>
                          <td>{da.data.strand[9]}</td>
                          <td>{da.data.score[9]}</td>
                        </tr> */}
                      </>
                    );
                  })}
                </tbody>
              </table>
            ) : null}
          </ResultTable>
        )}
      </div>
    </TargetWrap>
  );
};

export default Main1Target;
