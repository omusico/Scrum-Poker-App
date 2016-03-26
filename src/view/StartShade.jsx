/* @flow */

import React from 'react';

export default class StartShade extends React.Component {
  render() {
    return (
        <div className="start-shade">
          {this.props.children}
        </div>
    );
  }
}
