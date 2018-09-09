// @flow strict

import { combineSagas } from '../modules/_shared/utils/sagaHelpers'
import { authSaga } from './auth/saga'

export const rootSaga = combineSagas([authSaga])
