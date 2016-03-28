jest.unmock('../StartScreen');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StartScreen from '../StartScreen';

describe('StartScreen', () => {
  beforeEach(function() {
    const component = TestUtils.renderIntoDocument(<StartScreen />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function() {
    expect(this.node.className).to.equal('start');
  });

  it('draws some content', function() {
    expect(this.node.children).to.have.length.greaterThan(0);
  });
});
