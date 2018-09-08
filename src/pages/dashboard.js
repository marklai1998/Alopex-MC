// @flow strict

import React from 'react'

import { Dashboard } from '../modules/Dashboard'
import { Layout } from '../modules/_Layout'
import { Scroll } from '../modules/_Layout/Scroll'

export default () => (
  <Layout>
    <Scroll>
      <Dashboard />
    </Scroll>
  </Layout>
)
