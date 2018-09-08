// @flow strict

import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'

import { createStore } from '../modules/_shared/utils/createStore'
import { rootReducer } from '../redux'
import './style.css'

const store = createStore({
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
