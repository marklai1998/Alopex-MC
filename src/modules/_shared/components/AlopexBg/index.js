// @flow strict

import * as React from 'react'
import NoSSR from 'react-no-ssr'
import SnowStorm from 'react-snowstorm'

import styles from './index.css'

type Props = {
  children: React.Node,
}

export const AlopexBg = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.content}>{props.children}</div>
    <NoSSR>
      <SnowStorm
        freezeOnBlur={false}
        targetElement='snow'
        excludeMobile={false}
      />
    </NoSSR>
    <div id='snow' className={styles.snow}>
      <span>Alopex</span>
    </div>
    <div className={styles.top}>
      <img src='/static/mountains.svg' className={styles.mountains} />
      <img src='/static/land.svg' className={styles.land} />
    </div>
    <div className={styles.bottom}>
      <img src='/static/mountains.svg' className={styles.shadows} />
      <img src='/static/alopex.svg' className={styles.alopex} />
    </div>
  </div>
)
