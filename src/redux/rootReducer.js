// @flow strict

import { combineReducers } from 'redux'

import { uiReducer } from './ui/reducer'

export const rootReducer = combineReducers({
  ui: uiReducer
})
