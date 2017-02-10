import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoDetail from './twitch-video-detail';
import SearchTwitch from './SearchTwitch';
import TwitchVideoList from './twitch-video-list';
class TwitchWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: "Zizaran"};
  }
  getVideo(video) {
    this.setState({channel: video.channel.name});

  }
  render() {
    return(
      <div>

        <SearchTwitch />
        <TwitchVideoDetail channel={this.state.channel} />
        {this.props.twitchVideos ? <div> <TwitchVideoList videos={this.props.twitchVideos} getVideo={this.getVideo.bind(this)} /> </div> : null}
        
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
