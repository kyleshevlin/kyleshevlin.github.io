const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = env => {
  const config = {
    context: path.join(__dirname, 'app'),
    entry: './js/entry.js',
    output: {
      path: env.prod
        ? path.join(__dirname, 'dist')
        : path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    resolve: {
      alias: {
        react: 'preact-compat',
        'react-dom': 'preact-compat'
      },
      extensions: ['.js', '.jsx', '.json']
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true
    },
    devServer: {
      historyApiFallback: true
    },
    devtool: env.prod ? 'source-map' : 'eval',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use:
              'css-loader?sourceMap!postcss-loader?sourceMap!sass-loader?sourceMap'
          })
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader?sourceMap!postcss-loader?sourceMap'
          })
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development'
        )
      }),
      new ExtractTextPlugin('style.css'),
      new HtmlWebpackPlugin({
        template: './templates/index.ejs',
        title: 'Kyle Shevlin - Front End JavaScript Engineer'
      }),
      new CopyWebpackPlugin([
        {
          from: './assets/**/*',
          to: '[name].[ext]'
        }
      ])
    ]
  }

  return config
}
