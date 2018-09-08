// @flow strict

import { createAction } from 'redux-actions'

export const uiTypes = {
  SET_SIDER_COLLAPSED: 'SET_SIDER_COLLAPSED',
  SET_TERMINAL_COLLAPSED: 'SET_TERMINAL_COLLAPSED'
}

const setSiderCollapsed = createAction(
  uiTypes.SET_SIDER_COLLAPSED,
  (collapsed: boolean) => collapsed
)

const setConsoleCollapsed = createAction(
  uiTypes.SET_TERMINAL_COLLAPSED,
  (collapsed: boolean) => collapsed
)

export const uiCreators = {
  setSiderCollapsed,
  setConsoleCollapsed
}
