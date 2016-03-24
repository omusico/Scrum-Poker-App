const babel = require('babel-core');

module.exports = {
  process: function (src, filename) {
    const PREPEND = 'import React from \'react\';\n' +
                    'import ReactDOM from \'react-dom\';\n' +
                    'import TestUtils from \'react-addons-test-utils\';\n' +
                    'const chai = require(\'chai\');\n' +
                    'const expect = chai.expect;\n\n';

    if (filename.indexOf('node_modules') === -1) {
      //return PREPEND + src;
      return babel.transform(PREPEND + src, { filename: filename, retainLines: true, compact: false }).code;
    }

    return src;
  }
};
