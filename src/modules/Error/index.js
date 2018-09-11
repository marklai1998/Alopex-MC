// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React from 'react'

import { AlopexBg } from '../_shared/components/AlopexBg'
import { CenterBox } from '../_shared/components/CenterBox'
import { HexBg } from '../_shared/components/HexBg'
import { defaultError, errorMap } from './errorMap'
import styles from './index.css'

export const ErrorComponent = ({ statusCode }: { statusCode: number }) => {
  const matchCode = R.defaultTo(
    defaultError,
    R.find(R.propEq('code', statusCode))(errorMap)
  )
  return (
    <AlopexBg>
      <CenterBox>
        <div className={styles.iconWrapper}>
          <HexBg className={styles.iconBg}>
            <i className={classnames(matchCode.iconClass)} />
          </HexBg>
        </div>
        <div className={styles.title}>
          {matchCode.code === undefined ? '' : matchCode.code}
        </div>
        <div className={styles.content}>{matchCode.message}</div>
      </CenterBox>
    </AlopexBg>
  )
}
