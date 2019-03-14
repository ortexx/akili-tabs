"use strict";

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const pack = require('./package.json');

let entry = {
  'akili-tabs': "./src/tabs.js"
};

let plugins = [];
let minimize = process.env.MINIMIZE;
let build = process.env.BUILD;

let banner = `Tabs component for Akili framework\n
@version ${pack.version}
@author Alexandr Balasyan <mywebstreet@gmail.com>
{@link https://github.com/ortexx/akili-tabs}
{@link https://github.com/ortexx/akili}
{@link https://akilijs.com}`;

plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

minimize && (entry['akili-tabs.min'] = entry['akili-tabs']);

let config = {
  mode: build? 'production': 'development',
  performance: { hints: false },
  watch: !build,
  bail: true,
  devtool: "inline-source-map",
  entry: entry,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js",
    libraryExport: "default",
    libraryTarget: 'umd'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        extractComments: false
      })
    ]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['akili']
        }
      }
    ]
  },
  plugins: plugins
};

module.exports = config;