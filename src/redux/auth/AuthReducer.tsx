import {Action, Reducer} from "redux";
import {ASYNC_STATUS, AUTH_LOGIN_STATES} from "../../constants";

export type AuthState = {
  status: ASYNC_STATUS;
  token?: string;
  email?: string;
  password?: string;
  error?: string;
};
export interface AuthAction extends Action<AUTH_LOGIN_STATES> {
  token?: string;
  email?: string;
  password?: string;
  error?: string;
}

const initialState: AuthState = {
  status: ASYNC_STATUS.IDLE,
};

export const authReducer: Reducer<AuthState, AuthAction> = (
  state = {...initialState},
  action,
) => {
  switch (action.type) {
    case AUTH_LOGIN_STATES.START:
      return {
        ...state,
        error: undefined,
        status: ASYNC_STATUS.PENDING,
      };

    case AUTH_LOGIN_STATES.SUCCESS:
      return {
        ...state,
        error: undefined,
        token: action.token,
        email: action.email,
        password: action.password,
        status: ASYNC_STATUS.SUCCESS,
      };

    case AUTH_LOGIN_STATES.FAIL:
      return {
        ...state,
        email: undefined,
        password: undefined,
        token: undefined,
        error: action.error,
        status: ASYNC_STATUS.FAIL,
      };

    case AUTH_LOGIN_STATES.LOGOUT:
      return {
        ...state,
        email: undefined,
        password: undefined,
        token: undefined,
        error: undefined,
        status: ASYNC_STATUS.IDLE,
      };

    default:
      return state;
  }
};
