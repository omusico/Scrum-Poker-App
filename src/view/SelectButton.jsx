/* @flow */

import React from 'react';

export default class SelectButton extends React.Component {
  render() {
    return (
        <button>
          {this.props.children}
        </button>
    );
  }
}
