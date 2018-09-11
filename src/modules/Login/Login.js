// @flow strict

import { Text } from 'inputFields/Text'
import * as R from 'ramda'
import { createForm } from 'rc-form'
import React from 'react'
import { connect } from 'react-redux'

import { authCreators } from '../../redux/auth/actions'
import { AlopexBg } from '../_shared/components/AlopexBg'
import { CenterBox } from '../_shared/components/CenterBox'
import { Logo } from '../_shared/components/Logo'
import {
  fieldKeyFormatter,
  inputTypes,
  rulesGenerator
} from '../_shared/utils/formHelper'
import styles from './index.css'

type Props = {
  form: Object,
  authUser: ({ username: string, password: string }) => void
}

class Login extends React.PureComponent<Props> {
  onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((error, value) => {
      if (!error) {
        this.props.authUser(value)
      }
    })
  }

  render () {
    return (
      <AlopexBg>
        <CenterBox>
          <div className={styles.logoWrapper}>
            <Logo className={styles.logo} />
          </div>
          <div className={styles.title}>Login</div>
          <form className={styles.inputFields} onSubmit={this.onSubmit}>
            <Text
              label='User Name'
              form={this.props.form}
              id={fieldKeyFormatter(['username'])}
              rules={rulesGenerator({
                type: inputTypes.STRING,
                name: 'Username'
              })}
            />
            <Text
              label='Password'
              type='password'
              form={this.props.form}
              id={fieldKeyFormatter(['password'])}
              rules={rulesGenerator({
                type: inputTypes.STRING,
                name: 'Password'
              })}
            />
            <button
              type='submit'
              className={styles.submit}
              onClick={this.onSubmit}
            >
              <i className='fas fa-arrow-right' />
            </button>
          </form>
        </CenterBox>
      </AlopexBg>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  authUser: authCreators.authUser
}

export default R.compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  createForm()
)(Login)
