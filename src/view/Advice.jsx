/* @flow */

import React from 'react';
import {Seq} from 'immutable';

export default class Advice extends React.Component {
  tip: string;

  constructor() {

    super();
    const tips: Seq = Seq.of(
      'Keep it simple and get rid of big cards.',
      'There always someone who shows their cards too early…',
      'Use a timer to limit discussion.',
      'If consensus cannot be reached by the end of the third round pick the ' +
          'largest.',
      'Have fun!',
      'Stop implementation discussions before they go too deep.',
      'Managers don’t vote.',
      'Those who actually could do the work are the ones that vote.'
    );

    const index: number = Math.floor(tips.size * Math.random());
    this.tip = tips.get(index);
  }
  render() {
    return (
        <div className="start__caption">
          {this.tip}
        </div>
    );
  }
}
