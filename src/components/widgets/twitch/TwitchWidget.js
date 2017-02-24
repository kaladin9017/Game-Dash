import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoDetail from './twitch-video-detail';
import SearchTwitch from './SearchTwitch';
import TwitchVideoList from './twitch-video-list';
import TwitchChat from './TwitchChat';
import StreamWidget from '../stream/StreamWidget';

class TwitchWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {channel: "Zizaran", redditCode: ''};
  }
  componentDidMount() {
    if(this.props.location.search.length > 2) {
      this.setState({ redditCode: this.props.location.search.split('=')[2] });
    }

  }
  getVideo(video) {
    this.setState({channel: video.channel.name});

  }
  render() {
    return(
      <div className="twitch-container">

        <div className="reddit-container">

          <div className="reddit-container-stream">
            {this.props.twitchVideos ? <TwitchVideoList videos={this.props.twitchVideos} getVideo={this.getVideo.bind(this)} /> : null}
          </div>

          <div className="reddit-social-display" >
            <StreamWidget redditCode={this.state.redditCode} />
          </div>

        </div>

          <div className="twitch-social">
            <SearchTwitch />

            <div className="twitch-video-display">
              <TwitchVideoDetail channel={this.state.channel} />
            </div>

            <div className="twitch-social-display">
              <TwitchChat channel={this.state.channel} />
            </div>

          </div>
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
