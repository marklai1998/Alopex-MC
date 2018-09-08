// @flow strict

import React from 'react'

import classNames from 'classnames'
import styles from './index.css'

type Props = {
  className: string,
}

export const Logo = (props: Props) => (
  <div className={classNames(styles.logo, props.className)}>
    <img src='/static/logo.svg' />
    <div className={styles.logoBG} />
  </div>
)
