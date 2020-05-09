const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    overlay: {
      contentBase: baseConfig.externals.paths.dist,
      port: 1337,
      warnings: false,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(config)
})
