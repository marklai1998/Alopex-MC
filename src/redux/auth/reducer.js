// @flow strict

import { Record } from 'immutable'
import type { RecordOf } from 'immutable'
import { handleActions } from 'redux-actions'
import type { ActionType } from 'redux-actions'

import { authCreators, authTypes } from './actions'

type StateProps = RecordOf<{
  userDetails: ?RecordOf<{ [string]: string }>,
  isLoggedIn: boolean,
  fetching: RecordOf<{ auth: boolean }>
}>

export const INITIAL_STATE: StateProps = Record({
  userDetails: null,
  isLoggedIn: true,
  fetching: Record({
    auth: false
  })()
})()

export const setLoginStatus = (
  state: StateProps,
  { payload }: ActionType<typeof authCreators.setLoginStatus>
) => state.set('isLoggedIn', payload)

export const authUser = (state: StateProps) =>
  state.setIn(['fetching', 'auth'], true)

export const authUserSucceed = (state: StateProps) => {
  // message.success('儲存成功')
  return state.setIn(['fetching', 'auth'], false)
}

export const authReducer = handleActions(
  {
    [authTypes.SET_LOGIN_STATUS]: setLoginStatus
  },
  INITIAL_STATE
)
