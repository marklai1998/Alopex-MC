// @flow strict

import React from 'react'

import { HexBg } from '../HexBg'
import styles from './index.css'

type Props = {
  className: string
}

export const Logo = (props: Props) => (
  <HexBg className={props.className}>
    <img src='/static/logo.svg' className={styles.logo} />
  </HexBg>
)
