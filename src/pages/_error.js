// @flow strict

import React from 'react'

type Props = {
  statusCode: number
}

export default class ErrorPage extends React.Component<Props> {
  static getInitialProps ({ res, err }: { res: Object, err: Object }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render () {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}
