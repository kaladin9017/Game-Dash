const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
import { Link } from 'react-router';
import {Component} from 'react';

class SideBar extends Component {
  render() {
    return (
      <div>
        <div className="dashboard">
          <center>
            <div className="row">
              <div className="stay">
                <ul id="pjsub">
                  <li className="lineitem"><h4>Welcome, </h4></li>
                    <li className="lineitem"><h3>Parth J</h3></li>
                      <li className="lineitem">Edit profile <span className="glyphicon glyphicon-pencil" id="editpro"></span></li>
                        <li className="lineitem">Settings <span className="glyphicon glyphicon-cog" id="settings"></span></li>
                          <li className="lineitem">Log out <span className="glyphicon glyphicon-remove" id="logout"></span></li>
                            </ul>
              </div>
                </div>
          </center>
            <br />
              <center><div><h4 className="backtogames">Back to games</h4></div></center>
              {
                // LIST OF GAMES
              }
                <ul className="dashgames">
                  <Link to="/eveToken"><li className="game" id="gameone">Eve</li></Link>
                  <Link to="/warcraftwidgets"><li className="game" id="gametwo">World of Warcraft</li></Link>   
                  <Link to="/test"><li className="game" id="gamethree"> Misc.</li></Link>
                  <li className="game" id="addgame">+</li> 
                </ul>

              {
                // LIST OF WIDGETS FOR EVE ONLINE     
              }
                <ul className="gameonewidgets">
                  <li className="widgetgameone"><span className="glyphicon glyphicon-cog"></span>Eve-Mail</li>
                </ul>
              {
                // LIST OF WIDGETS FOR WORLD OF WARCRAFT    
              }
                <ul className="gametwowidgets">
                  <li className="widgetgametwo"><span className="glyphicon glyphicon-cog"></span>Relm-Status</li>
                </ul>
              {
                // LIST OF WIDGETS FOR MISCLLANEOUS    
              }
                <ul className="gamethreewidgets">
                  <li className="widgetgamethree"><span className="glyphicon glyphicon-cog"></span>You-Tube</li>
                </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
