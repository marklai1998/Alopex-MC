// @flow strict

import { createAction } from 'redux-actions'

export const authTypes = {
  SET_LOGIN_STATUS: 'SET_LOGIN_STATUS',
  AUTH_USER: 'AUTH_USER',
  AUTH_USER_SUCCEED: 'AUTH_USER_SUCCEED',
  REQUEST_FAILURE: 'REQUEST_FAILURE'
}

const setLoginStatus = createAction(
  authTypes.SET_LOGIN_STATUS,
  (status: boolean) => status
)

export const authUser = createAction(
  authTypes.AUTH_USER,
  ({ username, password }: { username: string, password: string }) => ({
    username,
    password
  })
)

export const authUserSucceed = createAction(
  authTypes.AUTH_USER_SUCCEED,
  (eventDetail: Object) => eventDetail
)

export const requestFailure = createAction(
  authTypes.REQUEST_FAILURE,
  (err: Object) => err
)

export const authCreators = {
  setLoginStatus,
  authUser,
  authUserSucceed,
  requestFailure
}
