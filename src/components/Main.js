import React, { Component } from "react";
import SideBar from './dashboard/sidebar/sidebar';

import { connect } from 'react-redux';
import { getRedditAccessToken, getSubReddit } from '../actions/index';

require('./dashboard/styles/sidebar.css');


class Main extends Component {
  constructor(props) {
    super(props)

    this.state = { redditCode: ''}
  }
  componentDidMount() {
    if(window.location.href.includes('=')) {
      let redditCode = window.location.href.split('=')[2];
      redditCode = redditCode.slice(0, redditCode.length -2)
      this.props.getRedditAccessToken(redditCode)
    }

  }
  render(){
    console.log(this.props.reddit)
    // if(this.state.redditCode && !this.props.reddit.access_token) {
    //   this.props.getRedditAccessToken(this.state.redditCode)
    // }

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

function mapStateToProps(state) {
  return {
    reddit : state.reddit
  };
}

export default connect(mapStateToProps, { getRedditAccessToken, getSubReddit })(Main)
