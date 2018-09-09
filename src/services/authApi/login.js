// @flow strict

import type { Axios } from 'axios'

export const login = (api: Axios) => (...args: any) =>
  api.post(`/api/login`, ...args)
