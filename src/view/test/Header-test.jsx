jest.unmock('../Header');

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
    expect(this.node.className).toBe('header');
  });
  it('has correct content', function() {
    expect(this.node.textContent).toBe('Scrum Poker');
  });
  it('has settings button', function() {
    expect(this.node.children.length).toBe(2);
    expect(this.node.children[1].className).toBe('header__settings');
  });
});
