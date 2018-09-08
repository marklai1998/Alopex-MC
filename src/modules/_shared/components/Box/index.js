// @flow strict

import * as React from 'react'

import styles from './index.css'

type Props = {
  children: React.Node
}

export const Box = (props: Props) => (
  <div className={styles.box}>{props.children}</div>
)
