// @flow strict

import type { Axios } from 'axios'

export const login = (api: Axios) => (loginObj: {
  username: string,
  password: string
}) => api.post(`/api/login`, loginObj)
