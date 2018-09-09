// @flow strict

import { authCreators } from '../actions'
import { INITIAL_STATE, setLoginStatus } from '../reducer'

describe('auth/reducer', () => {
  test('#setLoginStatus', () => {
    const trueAction = authCreators.setLoginStatus(true)
    const falseAction = authCreators.setLoginStatus(false)
    const mockInitialState = INITIAL_STATE

    const expectedTrueState = setLoginStatus(mockInitialState, trueAction)
    const expectedFalseState = setLoginStatus(mockInitialState, falseAction)

    expect(expectedTrueState).toHaveProperty('isLoggedIn', true)
    expect(expectedFalseState).toHaveProperty('isLoggedIn', false)
  })
})
