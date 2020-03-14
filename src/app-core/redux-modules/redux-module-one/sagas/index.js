import {
  call,
  put,
  delay,
  takeLatest,
  cancel,
  all,
  select
} from "redux-saga/effects";

import { toast } from "react-toastify";

import * as actions from "../actions";
import * as selectors from "../selectors";
// import * as api from "../api";

const toastProps = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
};

function* runAppStart() {
  const userFlag = yield select(selectors.getUserFlag);

  if (!userFlag) {
    yield call(toast.info, `Welcome, May I know your name?`, toastProps);
    yield cancel();
  }

  yield delay(2000);
  yield call(toast.info, `App started`, toastProps);
}

function* updateUserInfo(event) {
  const { infoProps } = event;
  const { userName } = infoProps;

  if (!userName.length) {
    yield call(toast.error, `Please enter a name.!`, toastProps);
    yield cancel();
  }

  yield put({ type: actions.SET_USER_NAME, userName });
  yield put({ type: actions.SET_USER_FLAG, isUserSet: true });

  yield call(toast.info, `Hello ${userName}`, toastProps);
}

function* tarSagaWatcher() {
  yield all([
    takeLatest(actions.RUN_APP_START, runAppStart),
    takeLatest(actions.UPDATE_USER_INFO, updateUserInfo)
  ]);
}

export default tarSagaWatcher;
