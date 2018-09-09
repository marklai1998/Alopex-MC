// @flow strict

import type { Saga } from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'

import { authApi } from '../../../services/authApi'
import { authTypes } from '../actions'
import { authUser } from './authUser'

export function * authSaga (): Saga<void> {
  try {
    yield all([takeLatest(authTypes.AUTH_USER, authUser, authApi)])
  } catch (err) {
    console.error(err)
  }
}
