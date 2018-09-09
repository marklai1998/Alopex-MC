// @flow strict

import { uiCreators } from '../actions'
import {
  INITIAL_STATE,
  setConsoleCollapsed,
  setSiderCollapsed
} from '../reducer'

describe('ui/reducer', () => {
  test('#setSiderCollapsed', () => {
    const trueAction = uiCreators.setSiderCollapsed(true)
    const falseAction = uiCreators.setSiderCollapsed(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setSiderCollapsed(mockInitialState, trueAction)
    const expectedFalseState = setSiderCollapsed(mockInitialState, falseAction)

    expect(expectedTrueState).toHaveProperty('sider.isCollapsed', true)
    expect(expectedFalseState).toHaveProperty('sider.isCollapsed', false)
  })

  test('#setConsoleCollapsed', () => {
    const trueAction = uiCreators.setConsoleCollapsed(true)
    const falseAction = uiCreators.setConsoleCollapsed(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setConsoleCollapsed(mockInitialState, trueAction)
    const expectedFalseState = setConsoleCollapsed(
      mockInitialState,
      falseAction
    )

    expect(expectedTrueState).toHaveProperty('console.isCollapsed', true)
    expect(expectedFalseState).toHaveProperty('console.isCollapsed', false)
  })
})
