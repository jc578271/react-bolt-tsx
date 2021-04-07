import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from 'actions/users';
import * as api from 'api/users';

function* getUser() {
  try {
    const result = yield call(api.getUser);
    yield put(actions.getUserSuccess({ ...result.data }));
  } catch (e) {
    yield put(actions.getUserError());
  }
}

function* watchGetUsers() {
  yield takeEvery(actions.Types.GET_USER, getUser);
}

const userSagas = [fork(watchGetUsers)];

export default userSagas;
