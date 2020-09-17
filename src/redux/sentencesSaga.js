import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_SENTENCES } from './types.js';
import { sentencesRequest, sentencesResponse, sentencesError } from './actions';
import firebaseAPI from '../firebase';

function* sentencesWorker() {
  try {
    let tempData = [];
    yield put(sentencesRequest());
    yield call(() => {
      return new Promise((resolve, reject) => {
        firebaseAPI
          .database()
          .ref('sentence-builder')
          .on('child_added', (snapshot) => {
            tempData.push(snapshot.val());
          });
        resolve();
      });
    });
    yield put(sentencesResponse(tempData));
  } catch (e) {
    yield put(sentencesError(e));
  }
}

function* sentencesWatcher() {
  yield takeEvery(FETCH_SENTENCES, sentencesWorker);
}

export default sentencesWatcher;
