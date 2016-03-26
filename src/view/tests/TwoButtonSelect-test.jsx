jest.unmock('../TwoButtonSelect');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TwoButtonSelect from '../TwoButtonSelect';

describe('TwoButtonSelect', () => {
  beforeEach(function () {
    const component = TestUtils.renderIntoDocument(<TwoButtonSelect />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has buttons inside', function () {});
  it('only one button can be active', function () {});
});
