import {combineReducers, Reducer} from 'redux'
import {authReducer, AuthState} from './auth/AuthReducer'

const reducers = {
  authReducer,
}

export type CombinedReducer = {
  authReducer: AuthState
}
// export type CombinedReducer = typeof reducers
const combinedReducers = combineReducers<CombinedReducer>(reducers)

export const reducer: Reducer = (state, action) => {
  return combinedReducers(state, action)
}
