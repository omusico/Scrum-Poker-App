jest.unmock('../Header');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Header from '../Header';

describe('Header', () => {
  beforeEach(function() {
    const component = TestUtils.renderIntoDocument(<Header />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function() {
    expect(this.node.className).to.equal('header');
  });
  it('has correct content', function() {
    expect(this.node.textContent).to.equal('Scrum Poker');
  });
  it('has settings button', function() {
    expect(this.node.children).to.have.lengthOf(2);
    expect(this.node.children[1].className).to.equal('header__settings');
  });
});
