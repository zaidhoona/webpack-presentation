let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
let path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './main.js'
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
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: [{ loader: 'file-loader', options: { name: 'fonts/[name].[ext]' }}] },
      { test: /\.(png|jpg|jpeg|gif|bmp)$/, use: [{ loader: 'file-loader', options: { name: 'img/[name].[ext]' }}] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build', 'dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin([ 
      { from: { glob: 'content/*.md' } },
      { from: 'assets' }
    ]),
    new UglifyjsWebpackPlugin()
  ],
  devServer: {
    port: 3000
  }
};