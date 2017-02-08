var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery')
import { Link } from 'react-router'

var SideBar = React.createClass({

  render: function() {
    return (
      <div>
        
        <div className="dashboard">

              <center>

                	<div className="row">
        			 
              			  <div className="col-md-6">

              			  	  <div className="profilepic">

                      		</div>

              			  </div>
              			 
              			  <div className="col-md-6">

                			  	<h3 id="pj">Parth J</h3>
                  			
                	  			<ul id="pjsub">
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
                  <Link to="/evewidgets"> <li className="game" id="gameone">   Eve  <span className="glyphicon glyphicon-chevron-down" id="gamearrone"></span></li> </Link>   
                  <Link to="/warcraftwidgets"><li className="game" id="gametwo">   Warcraft <span className="glyphicon glyphicon-chevron-down" id="gamearrtwo"></span></li> </Link>   
                  <li className="game" id="gamethree"> Misc. <span className="glyphicon glyphicon-chevron-down" id="gamearrthree"></span></li>   
                  <li className="game" id="addgame">   + </li> 
                </ul>

              {
                // LIST OF WIDGETS FOR EVE ONLINE     
              }

                <ul className="gameonewidgets">
                  <li className="widgetgameone"> <span className="glyphicon glyphicon-cog"></span> Eve-Mail </li>
                </ul>

              {
                // LIST OF WIDGETS FOR WORLD OF WARCRAFT    
              }

                <ul className="gametwowidgets">
                  <li className="widgetgametwo"> <span className="glyphicon glyphicon-cog"></span> Relm-Status </li>
                </ul>

              {
                // LIST OF WIDGETS FOR MISCLLANEOUS    
              }

                <ul className="gamethreewidgets">
                  <li className="widgetgamethree"> <span className="glyphicon glyphicon-cog"></span> You-Tube </li>
                </ul>


        </div>

      </div>
    )
  }
})

export default SideBar;
