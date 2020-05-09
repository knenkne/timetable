const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const config = merge(baseConfig, {
  mode: 'production',
  plugins: []
})

module.exports = new Promise((resolve, reject) => {
  resolve(config)
})
