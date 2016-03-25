'use strict';

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Imagemin = require('imagemin');

const SOURCE_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'public');

module.exports = {
  target: 'web',
  entry: path.resolve(SOURCE_DIR, 'index.jsx'),
  output: {
    path: OUTPUT_DIR,
    filename: 'js/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', 'css', '.scss']
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
    new CopyWebpackPlugin([
      { from: 'assets/' }
    ], {
      ignore: ['.DS_Store']
    }),
    function() {
      this.plugin('done', function() {
        console.log('done');
        new Imagemin()
        .src('assets/img/**/*.svg')
        .dest('public/img')
        .use(Imagemin.svgo())
        .run();
      });
    }
  ]
};
