// @flow strict

import classnames from 'classnames'
import * as R from 'ramda'
import React from 'react'
import Link from 'next/link'
import Scrollbars from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { withSize } from 'react-sizeme'

import { isSiderCollapsedSelector } from '../../../redux/ui/selectors'
import styles from './index.css'

type Props = {
  isSiderCollapsed: boolean,
}

const Sider = (props: Props) => (
  <div
    className={classnames(styles.sider, {
      [styles.collapsed]: props.isSiderCollapsed
    })}
  >
    <Scrollbars universal>
      <ul
        className={classnames(styles.nav, {
          [styles.collapsed]: props.isSiderCollapsed
        })}
      >
        <li>
          <Link href='/dashboard'>
            <a>
              <i className='fas fa-tachometer-alt' />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/users'>
            <a>
              <i className='fas fa-user' />
              <span>Players</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/worlds'>
            <a>
              <i className='fas fa-map-marked-alt' />
              <span>Worlds</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/plugins'>
            <a>
              <i className='fas fa-plug' />
              <span>Plugins</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/backups'>
            <a>
              <i className='fas fa-file-archive' />
              <span>Backups</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href='/config'>
            <a>
              <i className='fas fa-sliders-h' />
              <span>Config</span>
            </a>
          </Link>
        </li>
      </ul>
    </Scrollbars>
    <ul
      className={classnames(styles.nav, styles.bottom, {
        [styles.collapsed]: props.isSiderCollapsed
      })}
    >
      <li>
        <Link href='/settings'>
          <a>
            <i className='fas fa-cogs' />
            <span>Settings</span>
          </a>
        </Link>
      </li>
    </ul>
  </div>
)

const mapStateToProps = state => ({
  isSiderCollapsed: isSiderCollapsedSelector(state)
})

export default R.compose(withSize(), connect(mapStateToProps))(Sider)
