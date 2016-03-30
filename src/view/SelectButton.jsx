/* @flow */

import React from 'react';

export default class SelectButton extends React.Component {
  state = {
    'active': false
  };

  componentWillMount() {
    if (this.props.active) {
      this.activate();
    }
  }

  render() {
    const className = `select-button${this.state.active ? ' active' : ''}`;
    return (
        <button className={className} onClick={this.activate.bind(this)}>
          {this.props.children}
        </button>
    );
  }

  activate() {
    this.setState({
      'active': true
    })
  }
}
