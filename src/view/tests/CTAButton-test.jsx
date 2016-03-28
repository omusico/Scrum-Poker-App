jest.unmock('../CTAButton');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CTAButton from '../CTAButton';

describe('CTAButton', () => {
  beforeEach(function() {
    const component = TestUtils.renderIntoDocument(<CTAButton />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function() {
    expect(this.node.className).to.equal('cta-button');
  });
});
