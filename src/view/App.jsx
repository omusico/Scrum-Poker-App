/* @flow */

import React from 'react';
import StartScreen from './StartScreen';
import Header from './Header';

export default class App extends React.Component {
  render() {
    return (
        <div>
          <Header />
          <StartScreen>
            {this.props.children}
          </StartScreen>
        </div>
    );
  }
}
