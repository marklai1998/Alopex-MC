// @flow strict

import { uiCreators } from '../actions'
import { INITIAL_STATE, setSiderCollapsed } from '../reducer'

describe('ui/reducer', () => {
  test('#setLoginStatus', () => {
    const trueAction = uiCreators.setSiderCollapsed(true)
    const falseAction = uiCreators.setSiderCollapsed(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setSiderCollapsed(mockInitialState, trueAction)
    const expectedFalseState = setSiderCollapsed(mockInitialState, falseAction)

    expect(expectedTrueState).toHaveProperty('sider.isCollapsed', true)
    expect(expectedFalseState).toHaveProperty('sider.isCollapsed', false)
  })
})
