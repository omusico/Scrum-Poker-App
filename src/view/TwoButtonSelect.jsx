/* @flow */

import React from 'react';
import SelectButton from './SelectButton';

export default class TwoButtonSelect extends React.Component {
  render() {
    return (
        <div>
          <SelectButton />
          <SelectButton />
        </div>
    );
  }
}
