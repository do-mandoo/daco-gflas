// 루트 리듀서

import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import gflas, { gflasSaga } from './gflasData';

const rootReducer = combineReducers({
  gflas,
});

export function* rootSaga() {
  yield all([gflasSaga()]);
}

export default rootReducer;
