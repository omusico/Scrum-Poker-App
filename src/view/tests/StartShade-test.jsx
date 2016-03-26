jest.unmock('../StartShade');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StartShade from '../StartShade';

describe('StartShade', () => {
  beforeEach(function () {
    const component = TestUtils.renderIntoDocument(<StartShade />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function () {
    expect(this.node.className).to.equal('start-shade');
  });

  xit('draw children inside', function() {});
});
