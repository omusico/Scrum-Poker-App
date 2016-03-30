jest.unmock('../TwoButtonSelect');
jest.unmock('../SelectButton');

import {expect} from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TwoButtonSelect from '../TwoButtonSelect';

describe('TwoButtonSelect', () => {
  beforeEach(function () {
    this.options = ['Team Member', 'Scrum Master'];
    const component = TestUtils.renderIntoDocument(
        <TwoButtonSelect options={this.options}/>
    );
    this.node = ReactDOM.findDOMNode(component);
  });

  it('has two buttons inside', function () {
    expect(this.node.children).to.have.lengthOf(2);
    expect(this.node.children[0].textContent).to.contain(this.options[0]);
    expect(this.node.children[1].textContent).to.contain(this.options[1]);
    expect(this.node.children[0].className).to.contain('active');
    expect(this.node.children[1].className).to.not.contain('active');
  });

  xit('only one button can be active', function () {});
});
