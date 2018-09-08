// @flow strict

export const isSiderCollapsedSelector = (state: Object) =>
  state.ui.getIn(['sider', 'isCollapsed'])

export const isConsoleCollapsedSelector = (state: Object) =>
  state.ui.getIn(['console', 'isCollapsed'])
