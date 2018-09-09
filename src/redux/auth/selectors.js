// @flow strict

export const isLoggedInSelector = (state: Object) =>
  state.auth.get('isLoggedIn')
