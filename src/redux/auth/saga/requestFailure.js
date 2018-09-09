// @flow strict

import type { ActionType } from 'redux-actions'
import type { Saga } from 'redux-saga'
import { put } from 'redux-saga/effects'

import { authCreators } from '../actions'

export function * requestFailure ({
  payload
}: ActionType<typeof authCreators.requestFailure>): Saga<void> {
  try {
    const { code } = payload
    if (code === 401) {
      yield put(authCreators.setLoginStatus(false))
    } else {
      yield put(authCreators.setLoginStatus(true))
    }
  } catch (err) {
    console.error(err)
  }
}
