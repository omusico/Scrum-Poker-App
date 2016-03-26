jest.unmock('../SelectRole');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SelectRole from '../SelectRole';

describe('SelectRole', () => {
  beforeEach(function () {
    const component = TestUtils.renderIntoDocument(<SelectRole />);
    this.node = ReactDOM.findDOMNode(component);
  });

  xit('has two buttons for roles', function () {});
  xit('has checkbox, active only for Scrum Master', function () {});
});
