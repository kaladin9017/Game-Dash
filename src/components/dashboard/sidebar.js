import { Link } from 'react-router';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import WidgetTab from './WidgetTab';


class SideBar extends Component {
  render() {
    let gameTabs = [];
    for(let game in this.props.games) {
      this.props.games[game][0] ? gameTabs.push( <WidgetTab key={game} gameName={game} widgets={this.props.games[game]} /> ) : null;
    }
    return (
      <div>
        <div className="dashboard">
          <center>
            <div className="row">
              <div className="stay">
                <ul id="pjsub">
                  <li className="lineitem"><h4>Welcome</h4></li>
                </ul>
              </div>
            </div>
          </center>
            <br />
          <ul className="dashgames">
            {gameTabs}
          </ul>
        </div>
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
