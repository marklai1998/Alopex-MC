// @flow strict

import type { Saga } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

type SagaGeneratorFn = (...Array<any>) => Saga<void>

export const combineSagas = (sagas: Array<SagaGeneratorFn>) =>
  function * rootSaga (): Saga<void> {
    try {
      yield all(sagas.map(fork))
    } catch (err) {
      console.error(err)
    }
  }
