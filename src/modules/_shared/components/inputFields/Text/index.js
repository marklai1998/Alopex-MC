// @flow strict

import classnames from 'classnames'
import * as React from 'react'

import styles from './styles.css'

type Props = {
  label: string,
  id: string,
  type: string,
  form?: Object,
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  rules: Array<Object>
}

type State = {
  isFocus: boolean,
  value: ?(string | number)
}

export class Text extends React.PureComponent<Props, State> {
  static defaultProps = {
    type: 'text'
  }

  state = {
    isFocus: false,
    value: null
  }

  onChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value })
    if (this.props.onChange !== undefined) this.props.onChange(e)
  }

  onFocus = () => {
    this.setState({ isFocus: true })
  }

  onBlur = () => {
    if (this.state.value === '' || this.state.value === null) {
      this.setState({ isFocus: false })
    }
  }

  withFieldDecorator = (element: React.Node) => {
    if (this.props.form !== undefined) {
      return this.props.form.getFieldDecorator(this.props.id, {
        rules: this.props.rules
      })(element)
    } else {
      return element
    }
  }

  getFieldError = () => {
    if (this.props.form === undefined) return ''
    const error = this.props.form.getFieldError(this.props.id)
    return error ? error.join(',') : ''
  }

  render () {
    const error = this.getFieldError()
    return (
      <div className={styles.wrapper}>
        {this.withFieldDecorator(
          <input
            type={this.props.type}
            className={classnames(styles.input, {
              [styles.error]: error !== ''
            })}
            id={this.props.id}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />
        )}
        <label
          className={classnames(styles.label, {
            [styles.isFocus]: this.state.isFocus,
            [styles.error]: error !== ''
          })}
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
        <div className={styles.errorText}>{error}</div>
      </div>
    )
  }
}
