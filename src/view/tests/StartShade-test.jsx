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

  it('draw children inside', function() {
    expect(this.node.children).to.have.lengthOf(0);
    const node = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <StartShade>
          <div>div</div>
          <a>link</a>
        </StartShade>
    ));
    expect(node.children).to.have.lengthOf(2);
  });
});

