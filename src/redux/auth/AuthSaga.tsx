import axios from "axios";
import {call, put} from "redux-saga/effects";
import {AUTH_LOGIN_STATES, URL_LOGIN} from "../../constants";
import {ActionProp} from "../../TypeUtils";

export type AuthRequestBody = {
    email: string;
    password: string;
};

export type AuthResponseBody = {
    token: string;
    password: string;
};

export async function authorize(payload: AuthRequestBody) {
    const result = await axios.get(URL_LOGIN, {
        data: payload,
    });

    return result.data
}

export function* loginFlow(payload: ActionProp<AuthRequestBody>) {
    try {
        const response = yield call(authorize, payload)
        yield put({
            type: AUTH_LOGIN_STATES.SUCCESS,
            email: payload.email,
            ...response,
        })
    } catch (error) {
        yield put({type: AUTH_LOGIN_STATES.FAIL, error: error.message})
    }
}
