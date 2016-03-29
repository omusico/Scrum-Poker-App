jest.unmock('../SelectButton');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SelectButton from '../SelectButton';

describe('SelectButton', () => {
  beforeEach(function () {
    const component = TestUtils.renderIntoDocument(<SelectButton />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function () {
    expect(this.node.className).to.equal('select-button');
  });

  it('draws text inside', function() {
    const node = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <SelectButton>text</SelectButton>)
    );
    expect(this.node.textContent).to.be.empty;
    expect(node.textContent).to.equal('text');
  });
});
