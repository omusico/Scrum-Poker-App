jest.unmock('../SelectRole');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SelectRole from '../SelectRole';

describe('SelectRole', () => {
  beforeEach(function () {
    this.component = TestUtils.renderIntoDocument(<SelectRole />);
    this.node = ReactDOM.findDOMNode(this.component);
  });

  it('has two buttons switch and checkbox with text', function () {
    expect(this.node.children).to.have.lengthOf(3);
    expect(this.node.children[1].tagName).to.equal('INPUT');
    expect(this.node.children[1].type).to.equal('checkbox');
    expect(this.node.children[2].tagName).to.equal('SPAN');
  });

  xit('has text in buttons to select roles', function() {});

  xit('has checkbox, active only for Scrum Master', function () {});
});
