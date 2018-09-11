// @flow strict

import classnames from 'classnames'
import * as React from 'react'

import styles from './index.css'

type Props = {
  children: React.Node,
  className: string
}

export const CenterBox = (props: Props) => (
  <div className={styles.container}>
    <div className={classnames(styles.box, props.className)}>
      {props.children}
    </div>
  </div>
)
