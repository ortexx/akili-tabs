"use strict";

const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function(config) {
  let conf = {
    basePath: "",
    frameworks: ['mocha', 'chai'],
    files: [
      'test/main.js'
    ],
    plugins : [
      'karma-mocha',
      'karma-chai',
      'karma-mocha-reporter',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter',
      'karma-webpack',
      'karma-sourcemap-loader'
    ],
    preprocessors: {
      'test/main.js': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'none',
      watch: false,
      devtool: 'inline-source-map',
      plugins: [new ESLintPlugin({ failOnError: true })],
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [
              path.resolve('src')
            ],
            loader: 'istanbul-instrumenter-loader',
            options: {
              esModules: true
            }
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
              path.resolve(__dirname, 'src'),
              path.resolve(__dirname, 'node_modules/akili')
            ],
            options: {
              configFile: path.resolve('./.babelrc')
            }
          }
        ]
      }
    },
    logLevel: config.LOG_ERROR,
    reporters: ['mocha', 'coverage-istanbul'],
    browsers : ['Chrome'],
    browserConsoleLogOptions: {
      terminal: true,
      level: ""
    },
    coverageIstanbulReporter: {
      reports: ['html'],
      dir : 'coverage/'
    },
    singleRun: true,
    colors: true,
    port: 9999
  };

  config.set(conf);
};