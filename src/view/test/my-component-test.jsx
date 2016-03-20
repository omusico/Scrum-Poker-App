jest.unmock('../my-component.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import MyComponent from '../my-component.jsx';

describe('MyComponent', () => {
  it('works!', () => {
    const myComponent = TestUtils.renderIntoDocument(<MyComponent />);
    const myComponentNode = ReactDOM.findDOMNode(myComponent);
    expect(myComponentNode.textContent).toEqual('Scrum Poker App!');
  });
});
