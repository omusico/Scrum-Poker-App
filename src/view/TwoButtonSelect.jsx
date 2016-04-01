/* @flow */

import React from 'react';
import SelectButton from './SelectButton';

export default class TwoButtonSelect extends React.Component {
  render() {
    return (
        <div className="two-button-select">
          <SelectButton active>{ this.props.options[0] }</SelectButton>
          <SelectButton>{ this.props.options[1] }</SelectButton>
        </div>
    );
  }
}
