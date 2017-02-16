import React, {Component} from 'react';
const GW2_BANNER = require('../../assets/gw2-banner.jpg');

class GuildWars2TalentCalc extends Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {

    return (
      <div>
        <a target="_blank" href="http://en.gw2skills.net/editor/"><img src={GW2_BANNER} /></a>
      </div>
    );
  }
}

export default GuildWars2TalentCalc;
