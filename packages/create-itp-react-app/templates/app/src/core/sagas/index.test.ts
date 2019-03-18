import { testSaga } from 'redux-saga-test-plan';
import { default as rootSaga } from './index';

test('rootSaga', () => {
  testSaga(rootSaga)
    .next()
    .finish()
    .isDone();
});
