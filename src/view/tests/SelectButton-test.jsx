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

  xit('has correct className', function () {
    expect(this.node.className).to.equal('select-button');
  });

  xit('has correct className when active', function () {
    expect(this.node.className).to.equal('select-button active');
  });

  xit('draws text inside', function() {});
});
