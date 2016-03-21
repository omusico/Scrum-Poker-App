jest.unmock('../MyComponent');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('works!', () => {
    const myComponent = TestUtils.renderIntoDocument(<MyComponent />);
    const myComponentNode = ReactDOM.findDOMNode(myComponent);
    expect(myComponentNode.textContent).toEqual('Scrum Poker App!');
  });
});
