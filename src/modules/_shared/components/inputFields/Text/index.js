// @flow strict

import React from 'react'

import styles from './styles.css'

type Props = {
  label: string,
  id: string,
  type: string
}

export const Text = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <input
        type={props.type}
        className={styles.input}
        id={props.id}
        required
      />
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  )
}

Text.defaultProps = { type: 'text' }
