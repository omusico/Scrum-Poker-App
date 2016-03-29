jest.unmock('../Footer');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../Footer';

describe('Footer', () => {
  beforeEach(function () {
    const component = TestUtils.renderIntoDocument(<Footer />);
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has correct className', function () {
    expect(this.node.className).to.equal('footer');
  });

  it('draws its children', function() {
    expect(this.node.children).to.have.lengthOf(0);
    const node = ReactDOM.findDOMNode(TestUtils.renderIntoDocument(
        <Footer>
          <div></div>
          <span>ada</span>
          <object>d</object>
        </Footer>
    ));
    expect(node.children).to.have.lengthOf(3);
  });
});
