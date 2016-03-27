/* @flow */

import React from 'react';
import Advice from './Advice';
import CTAButton from './CTAButton';
import StartShade from './StartShade';
import SelectRole from './SelectRole';
import Footer from './Footer';

export default class StartScreen extends React.Component {
  render() {
    return (
        <div className="start">
          <Advice />
          <CTAButton />
          <StartShade>
            <input type="text" className="your-name"
                   placeholder="Enter your name"/>
            <SelectRole />
            <Footer>
              <a>Donate to support</a>
              <p>App created by Evgeny Mikheev</p>
              <p>Coffee Icon by Jacob Halton from the Noun Project,
                Cards Icon by Henry Ryder from the Noun Project,
                Scrum spike Icon by Roy Verhaag from the Noun Project</p>
            </Footer>
          </StartShade>
        </div>
    );
  }
}
