const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      loader: ['babel-loader', 'eslint-loader'],
      exclude: '/node_modules/'
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config:
            { path: 'postcss.config.js' }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
      // loader: [
      //   'style-loader',
      // MiniCssExtractPlugin.loader,
      //   {
      //     loader: 'css-loader',
      //     options: { sourceMap: true }
      //   },
      //   {
      //     loader: 'postcss-loader',
      //     options: { sourceMap: true, config: { path: 'postcss.config.js' } }
      //   },
      //   {
      //     loader: 'sass-loader',
      //     options: { sourceMap: true }
      //   }
      // ]
    }]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
