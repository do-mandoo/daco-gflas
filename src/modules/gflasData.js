import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../../public/lib/createRequestSaga';

const GET_DATA = 'gflas/GET_DATA';
const GET_DATA_SUCCESS = 'gflas/GET_DATA_SUCCESS';

export const getData = createAction(GET_DATA);

const getDataSaga = createRequestSaga(GET_DATA);

export function* gflasSaga() {
  yield takeLatest(GET_DATA, getDataSaga);
}

//초기상태 선언
//요청의 로딩 중 상태는 loading이라는 객체에서 관리
const initialStata = {
  gflasData: null,
};

const gflas = handleActions(
  {
    [GET_DATA_SUCCESS]: (state, action) => ({
      ...state,
      gflasData: action.payload,
    }),
  },
  initialStata
);

export default gflas;
