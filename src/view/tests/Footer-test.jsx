jest.unmock('../Footer');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../Footer';

describe('Footer', () => {
  beforeEach(function () {
    const component = TestUtils.renderIntoDocument(<Footer />);
    this.node = ReactDOM.findDOMNode(component);
  });

  xit('has correct className', function () {
    expect(this.node.className).to.equal('footer-test');
  });

  xit('draws its children', function() {});
});
