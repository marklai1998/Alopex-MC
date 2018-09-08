// @flow strict

import { Record } from 'immutable'
import type { RecordOf } from 'immutable'
import { handleActions } from 'redux-actions'
import type { ActionType } from 'redux-actions'

import { uiCreators, uiTypes } from './actions'

type StateProps = {
  sider: RecordOf<{ isCollapsed: boolean }>,
  console: RecordOf<{ isCollapsed: boolean }>,
}
export const INITIAL_STATE: RecordOf<StateProps> = Record({
  sider: Record({
    isCollapsed: true
  })(),
  console: Record({
    isCollapsed: false
  })()
})()

export const setSiderCollapsed = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setSiderCollapsed>
) => state.setIn(['sider', 'isCollapsed'], payload)

export const setConsoleCollapsed = (
  state: typeof INITIAL_STATE,
  { payload }: ActionType<typeof uiCreators.setConsoleCollapsed>
) => state.setIn(['console', 'isCollapsed'], payload)

export const uiReducer = handleActions(
  {
    [uiTypes.SET_SIDER_COLLAPSED]: setSiderCollapsed,
    [uiTypes.SET_TERMINAL_COLLAPSED]: setConsoleCollapsed
  },
  INITIAL_STATE
)
