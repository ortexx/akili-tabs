"use strict";

const webpack = require('webpack');
const path = require('path');
const pack = require('./package.json');

let entry = {
  'akili-tabs': "./src/tabs.js",
  'akili-tabs.min': "./src/tabs.js"
};

let plugins = [];

let banner = `Tabs component for Akili framework\n
@version ${pack.version}
@author Alexandr Balasyan <mywebstreet@gmail.com>
{@link https://github.com/ortexx/akili-tabs}
{@link https://github.com/ortexx/akili}
{@link https://akilijs.com}`;


plugins.push(new webpack.BannerPlugin({
  banner: banner.trim()
}));

plugins.push(new webpack.optimize.UglifyJsPlugin({
  include: /\.min\.js$/,
  minimize: true,
  compress: {
    warnings: false
  }
}));

let config = {
  watch: false,
  bail: true,
  devtool: "inline-source-map",
  entry: entry,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        include: [
          path.resolve("src"),
          path.resolve("node_modules/akili")
        ],
        query: {
          presets: ['es2015', 'stage-0', 'stage-3']
        }
      }
    ]
  },
  plugins: plugins
};

module.exports = config;