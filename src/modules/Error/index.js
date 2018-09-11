// @flow strict

import React from 'react'

import { AlopexBg } from '../_shared/components/AlopexBg'
import { CenterBox } from '../_shared/components/CenterBox'

export const ErrorComponent = ({ statusCode }: { statusCode: number }) => (
  <AlopexBg>
    <CenterBox>{statusCode}</CenterBox>
  </AlopexBg>
)
