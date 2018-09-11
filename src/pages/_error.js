// @flow strict

import React from 'react'

import { ErrorComponent } from '../modules/Error'

type Props = {
  statusCode: number
}

export default class ErrorPage extends React.Component<Props> {
  static getInitialProps ({ res, err }: { res: Object, err: Object }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return <ErrorComponent statusCode={this.props.statusCode} />
  }
}
