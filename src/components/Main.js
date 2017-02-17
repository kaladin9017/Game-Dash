import React, { Component } from "react";
import SideBar from './dashboard/sidebar/sidebar';
require('./dashboard/styles/sidebar.css');

export default class Main extends Component {
  render(){
    return(
			<div className="GameDash">
				<SideBar />
        <div className="widget-display">
          {this.props.children}
        </div>
			</div>
    );
  }
}
