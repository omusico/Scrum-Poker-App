'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  target: 'web',
  entry: path.resolve(SOURCE_DIR, 'index.jsx'),
  output: {
    path: OUTPUT_DIR,
    filename: 'js/bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.jsx$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],

    loaders: [
      { test: /\.jsx$/i,  loader: 'babel', include: SOURCE_DIR },
      { test: /\.scss$/i, loader: ExtractTextPlugin.extract('style', 'css!sass'), include: SOURCE_DIR }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    function() {
      console.log('starting...');
      this.plugin('done', function() {
        const fs = require('graceful-fs');

        fs.readFile(SOURCE_DIR + '/index.html', 'utf8', function(readErr, data) {
          if (readErr) {
            return console.log(readErr);
          }

          data = data.replace(
              '</head>',
              '<link rel="stylesheet" href="/css/style.css"/></head>');

          fs.writeFile(OUTPUT_DIR + '/index.html', data, 'utf8', function(error) {
            if (error) {
              return console.log(error);
            }
          });
        });
      });
    }
  ]
};
