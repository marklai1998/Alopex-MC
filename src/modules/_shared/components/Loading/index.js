// @flow strict

import React from 'react'

import styles from './index.css'

export const Loading = () => (
  <div className={styles.container}>
    <div className={styles.cube}>
      <div className={styles.top} />
      <div className={styles.right} />
      <div className={styles.bottom} />
      <div className={styles.left} />
      <div className={styles.front} />
      <div className={styles.back} />
    </div>
    <span className={styles.loadingText}>Loading...</span>
  </div>
)
