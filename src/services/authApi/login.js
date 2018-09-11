// @flow strict

import type { Axios } from 'axios'

export const login = (api: Axios) => (loginInfo: {
  username: string,
  password: string,
  timeToken?: number
}) => api.post(`/api/client/auth`, loginInfo)
