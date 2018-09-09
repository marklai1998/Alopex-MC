// @flow strict

import axios from 'axios'

import { login } from './login'

const axiosInstance = axios.create({
  timeout: 10000,
  withCredentials: true
})

export const authApi = {
  login: login(axiosInstance)
}
