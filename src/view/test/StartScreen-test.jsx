jest.unmock('../StartScreen');

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
    expect(this.node.className).toEqual('start');
  });
});
