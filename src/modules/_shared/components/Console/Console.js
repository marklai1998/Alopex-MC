// @flow strict

import classNames from 'classnames'
import React from 'react'
import { connect } from 'react-redux'

import { isConsoleCollapsedSelector } from '../../../../redux/ui/selectors'
import styles from './index.css'

type Props = { isConsoleCollapsed: boolean }

const Console = (props: Props) => (
  <div
    className={classNames(styles.console, {
      [styles.collapsed]: props.isConsoleCollapsed
    })}
  >
    test
  </div>
)

const mapStateToProps = state => ({
  isConsoleCollapsed: isConsoleCollapsedSelector(state)
})

export default connect(mapStateToProps)(Console)
