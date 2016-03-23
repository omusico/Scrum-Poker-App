/* @flow */

import React from 'react';
import Advice from './Advice';

export default class StartScreen extends React.Component {
  render() {
    return (
        <div className="start">
          <Advice />
          {this.props.children}
        </div>
    );
  }
}
