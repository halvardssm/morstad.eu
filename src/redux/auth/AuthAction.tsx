import {AUTH_LOGIN_STATES} from '../../constants'
import {action} from '../Store'
import {AuthRequestBody} from "./AuthSaga";

export const authLoginAction = (payload: AuthRequestBody) => {
  action({
    type: AUTH_LOGIN_STATES.START,
    payload,
  })
}
