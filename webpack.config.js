"use strict";

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const pack = require('./package.json');

let plugins = [];
let isProd = process.env.NODE_ENV == 'production';

let banner = `Tabs component for Akili framework\n
@version ${pack.version}
@author Alexandr Balasyan <mywebstreet@gmail.com>
{@link https://github.com/ortexx/akili-tabs}
{@link https://github.com/ortexx/akili}
{@link https://akilijs.com}`;

plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

plugins.push(new ESLintPlugin());

let config = {
  mode: isProd? 'production': 'development',
  performance: { hints: false },
  watch: !isProd,
  devtool: isProd? false: "inline-source-map",
  entry: "./src/tabs.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "akili-tabs.js",
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  externals: {
    akili: 'Akili'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/akili')
        ],
        loader: 'babel-loader'
      }
    ]
  },
  plugins
};

module.exports = config;