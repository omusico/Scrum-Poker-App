/* @flow */

import React from 'react';

export default class Advice extends React.Component {
  constructor() {
    super();
    const tips = [
      'Keep it simple and get rid of big cards.',
      'There always someone who shows their cards too early…',
      'Use a timer to limit discussion.',
      'If consensus cannot be reached by the end of the third round pick the ' +
          'largest.',
      'Have fun!',
      'Stop implementation discussions before they go too deep.',
      'Managers don’t vote.',
      'Those who actually could do the work are the ones that vote.'
    ];

    const index = Math.floor(tips.length * Math.random());
    this.tip = tips[index];
  }
  render() {
    return (
        <div className="start__caption">
          {this.tip}
        </div>
    );
  }
}
