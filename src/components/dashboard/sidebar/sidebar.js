import { Link } from 'react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import WidgetTab from './WidgetTab';

const logo = require('../../../../images/logo-game-dash@3x.png');
// CSS

class SideBar extends Component {
  render() {
    let gameTabs = [];
    for(let game in this.props.games) {
      this.props.games[game][0] ? gameTabs.push( <WidgetTab key={game} gameName={game} widgets={this.props.games[game]} /> ) : null;
    }
    return (
      <div className="gamedash-sidebar">
        <center>
          <div>
            <img src={logo}
             className="Logo---GameDash"/>
           </div>
           <div>
           <Link to="settings">
             <button className="Rectangle-2">
               Add Widget
             </button>
           </Link>
          </div>
       </center>
       <center>
       <span className="tabs">
        <center>{gameTabs}</center>
       </span>
       </center>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    games: state.games
  };
}

export default connect(mapStateToProps, null)(SideBar);
