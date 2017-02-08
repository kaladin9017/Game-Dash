import React, { Component } from "react";
import SideBar from './dashboard/sidebar';
import InitialScreen from './initialscreen/initialscreen'
import EveScreen from './evescreen/evescreenpage'
import WarCraftScreen from './warcraftscreen/warcraftscreen'
import MiscScreen from './miscscreen/miscscreen'

export default class Main extends Component {

  render() {

    return (
      <div>
      	<SideBar />
        {this.props.children}
      </div>
    );

  }

}
