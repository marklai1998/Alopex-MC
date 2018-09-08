// @flow strict

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render () {
    return (
      <html>
        <Head>
          <link rel='stylesheet' href='/_next/static/style.css' />
          <link rel='shortcut icon' href='/static/favicon.ico' />
          <title>Alopex</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <script src='main.js' async />
          <link
            href='https://fonts.googleapis.com/css?family=Rajdhani'
            rel='stylesheet'
          />
          <link
            rel='stylesheet'
            href='https://use.fontawesome.com/releases/v5.3.1/css/all.css'
            integrity='sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU'
            crossOrigin='anonymous'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
