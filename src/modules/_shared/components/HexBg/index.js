// @flow strict

import classNames from 'classnames'
import * as React from 'react'

import styles from './index.css'

type Props = {
  className: string,
  children: React.Node
}

export const HexBg = (props: Props) => (
  <div className={classNames(styles.wrapper, props.className)}>
    {props.children}
    <div className={styles.HexBg} />
  </div>
)
