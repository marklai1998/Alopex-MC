// @flow strict

import './style.css'

import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'

import { createStore } from '../modules/_shared/utils/createStore'
import { rootReducer, rootSaga } from '../redux'

const store = createStore({
  rootSaga,
  rootReducer
})

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}
