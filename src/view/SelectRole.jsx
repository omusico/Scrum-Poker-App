/* @flow */

import React from 'react';
import TwoButtonSelect from './TwoButtonSelect';

export default class SelectRole extends React.Component {
  render() {
    return (
        <div className="select-role">
          <TwoButtonSelect options={['Team Member', 'Scrum Master']} />
          <input type="checkbox" /><span>Will you play poker yourself?</span>
        </div>
    );
  }
}
