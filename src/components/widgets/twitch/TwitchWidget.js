import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoDetail from './twitch-video-detail';
import SearchTwitch from './SearchTwitch';
import TwitchVideoList from './twitch-video-list';
class TwitchWidget extends Component {

  render() {
    return(
      <div>
        <SearchTwitch />
        {this.props.twitchVideos ? <TwitchVideoList videos={this.props.twitchVideos} /> : null}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    twitchVideos: state.twitchVideos
  };
}
export default connect(mapStateToProps)(TwitchWidget);
