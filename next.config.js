// @flow strict

const path = require('path')

const withCSS = require('@zeit/next-css')

const config = {
  cssModules: true,
  webpack (config) {
    const rules = [
      ...config.module.rules,
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: 'file-loader'
      }
    ]

    const resolve = {
      alias: {
        assets: path.resolve(__dirname, 'src/assets'),
        inputFields: path.resolve(
          __dirname,
          'src/modules/_shared/components/inputFields'
        )
      }
    }

    return { ...config, resolve, module: { rules } }
  }
}

module.exports = withCSS(config)
