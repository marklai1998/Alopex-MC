// @flow strict

import isPlainObject from 'is-plain-object'
import Moment from 'moment'
import * as R from 'ramda'

// ref:https://github.com/yiminghe/async-validator#type
export const inputTypes = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  METHOD: 'method',
  REGEXP: 'regexp',
  INTEGER: 'integer',
  FLOAT: 'float',
  ARRAY: 'array',
  OBJECT: 'object',
  ENUM: 'enum',
  DATE: 'date',
  URL: 'url',
  HEX: 'hex',
  EMAIL: 'email'
}

export const requireRule = (name?: string = 'this input') => ({
  required: true,
  message: `Please insert ${name}`
})

export const allWhitespaceRule = (whitespace: boolean) => ({
  whitespace,
  message: 'Input value can not be all whitespace'
})

export const startEndWithWhitespaceRule = {
  validator: (
    rule: Object,
    value: boolean | string | Object | number,
    callbackFunc: (string: ?string) => void
  ) => {
    if (rule.type === 'string' && typeof value === 'string') {
      if (value.startsWith(' ') || value.endsWith(' ')) {
        callbackFunc('Input value can not start/end with whitespace')
        return
      }
    }
    callbackFunc()
  }
}

export const rulesGenerator = ({
  required: isRequired = true,
  whitespace: hasWhiteSpace = true,
  startEndWithWhitespace = false,
  type = inputTypes.STRING,
  name
}: {
  required?: boolean,
  whitespace?: boolean,
  startEndWithWhitespace?: boolean,
  isEditor?: boolean,
  name?: string,
  type?: $Values<typeof inputTypes>
}) => {
  const conditions: Array<{ condition: boolean, ruleToApplied: any }> = [
    {
      condition: isRequired,
      ruleToApplied: requireRule(name)
    },
    {
      condition: type === inputTypes.STRING && hasWhiteSpace,
      ruleToApplied: allWhitespaceRule(hasWhiteSpace)
    },
    {
      condition: startEndWithWhitespace,
      ruleToApplied: startEndWithWhitespaceRule
    }
  ]
  // apply rule if condition matches
  return conditions.reduce((acc, cur) => {
    if (cur.condition) return [...acc, cur.ruleToApplied]
    return acc
  }, [])
}

export const fieldKeyFormatter = (path: Array<string | number>): string => {
  if (!Array.isArray(path)) {
    throw new TypeError('path should be a array')
  }
  return path.reduce((acc, value, index) => {
    if (index === 0) return String(value)
    switch (typeof value) {
      case 'number':
        return acc + '[' + value + ']'
      case 'string':
        return acc + '.' + value
      default:
        throw new TypeError('Element type must be either string or number')
    }
  }, '')
}

export const toArray = (item: any) => {
  const array: Array<typeof item> = Array.isArray(item) ? item : [item]
  return array
}

export const combineDateAndTimeToISOString = ({
  date,
  time
}: {
  date: Moment,
  time: Moment
}) =>
  Moment(date)
    .set({
      hour: time.hour(),
      minute: time.minute(),
      second: time.second()
    })
    .toISOString()

export const toCompactArray = R.compose(
  R.reject(R.either(R.isEmpty, R.isNil)),
  toArray
)

export const deepTrimSpace = (data: Object) =>
  R.map(datum => {
    if (isPlainObject(datum) || Array.isArray(datum)) {
      return deepTrimSpace(datum)
    }
    if (typeof datum === 'string') return datum.trim()
    return datum
  }, data)
