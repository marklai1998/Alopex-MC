// @flow strict

import type { ActionType } from 'redux-actions'
import type { Saga } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import { authApi } from '../../../services/authApi'
import { authCreators } from '../actions'

export function * authUser (
  authUserApi: typeof authApi,
  { payload }: ActionType<typeof authCreators.authUser>
): Saga<void> {
  try {
    const { data } = yield call(authUserApi.login, payload)
    yield put(authCreators.authUserSucceed(data))
  } catch (e) {
    yield put(authCreators.requestFailure(e))
  }
}
