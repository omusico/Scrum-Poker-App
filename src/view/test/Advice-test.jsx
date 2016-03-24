jest.unmock('../Advice');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Advice from '../Advice';

describe('Advice', () => {
  beforeEach(function() {
    const component = TestUtils.renderIntoDocument(<Advice />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function() {
    expect(this.node.className).to.equal('start__caption');
  });

  it('has correct content', function() {
    expect(typeof this.node.textContent).to.equal('string');
    expect(this.node.textContent).not.to.equal('');
    const lastLetter = this.node.textContent
        .charAt(this.node.textContent.length - 1);

    expect(lastLetter).to.be.oneOf(['.', '!', '…', '?']);
  });
});
