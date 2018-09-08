// @flow strict

import React from 'react'

import { AlopexBg } from '../../_shared/components/AlopexBg'
import { Logo } from '../../_shared/components/Logo'
import styles from './index.css'

export const About = () => (
  <AlopexBg>
    <div className={styles.container}>
      <div className={styles.aboutBox}>
        <div className={styles.logoWrapper}>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.title}>About</div>
        <div className={styles.content}>Alopex Panel v1.0</div>
      </div>
    </div>
  </AlopexBg>
)
