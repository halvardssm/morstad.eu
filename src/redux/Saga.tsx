import {takeLatest} from 'redux-saga/effects'
import {loginFlow} from "./auth/AuthSaga";
import {AUTH_LOGIN_STATES} from "../constants";

export function* saga() {
  yield takeLatest(AUTH_LOGIN_STATES.START, loginFlow)
}
