// @flow strict

import React from 'react'

import { Layout } from '../modules/_Layout'
import { Scroll } from '../modules/_Layout/Scroll'
import { Dashboard } from '../modules/Dashboard'

export default () => (
  <Layout title='Dashboard'>
    <Scroll>
      <Dashboard />
    </Scroll>
  </Layout>
)
