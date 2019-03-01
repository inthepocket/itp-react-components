import { all, fork } from 'redux-saga/effects';
import featuresSaga from './features/featuresSaga';

export default function* rootSaga() {
  yield all([
    fork(featuresSaga),
  ]);
}
