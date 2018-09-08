// @flow strict

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'

type Props = {
  size: number,
  className: string
}

const Avatar = (props: Props) => (
  <div
    className={classNames(props.className, styles.avatar)}
    style={{ width: props.size + 'px', height: props.size + 'px' }}
  />
)

export default Avatar
