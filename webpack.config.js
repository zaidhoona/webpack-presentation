var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js'
  },
  externals: {
    'reveal': 'Reveal'
  },
  module: {
    loaders: [
      { test: /\.css$/, use: [ { loader:'style-loader' }, { loader: 'css-loader' }] },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: [{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]' }}] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build', 'dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([ 
      { from: { glob: 'content/*.md' } } 
    ])
  ],
  devServer: {
    port: 8080
  }
};