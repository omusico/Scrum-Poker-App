jest.unmock('../App');
jest.unmock('../MyComponent');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../App';

describe('App', () => {
  it('renders correctly', () => {
    const app = TestUtils.renderIntoDocument(<App />);
    const appNode = ReactDOM.findDOMNode(app);
    expect(appNode.textContent).toEqual('Scrum Poker App!');
  });
});
