// @flow strict

import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore
} from 'redux'
import type { CombinedReducer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import type { Saga } from 'redux-saga'

type Payload = {|
  preloadedState?: Object,
  rootReducer: CombinedReducer<any, any>,
  rootSaga?: () => Saga<void>,
|}

export const createStore = ({
  rootReducer,
  rootSaga,
  preloadedState = {}
}: Payload) => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers = typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

  const store = reduxCreateStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  if (rootSaga) sagaMiddleware.run(rootSaga)

  return store
}
