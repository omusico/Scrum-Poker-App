const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var SOURCE_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: path.resolve(SOURCE_DIR, 'index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/,  loader: "style!css" },
      { test: /\.jsx$/,  loader: 'babel', include: SOURCE_DIR },
      { test: /\.scss$/, loader: 'style!css!sass', include: SOURCE_DIR }
    ]
  }
};

module.exports = config;
