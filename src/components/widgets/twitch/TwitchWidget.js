import React, { Component } from 'react';
import { connect } from 'react-redux';

import TwitchVideoDetail from './twitch-video-detail';
import SearchTwitch from './SearchTwitch';
import TwitchVideoList from './twitch-video-list';
import TwitchChat from './TwitchChat';
import StreamWidget from '../stream/StreamWidget';

import { fetchTwitchVideos } from '../../../actions/index';

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
  handleSearch(gameName) {
    this.props.fetchTwitchVideos(gameName);
  }
  getVideo(video) {
    this.setState({channel: video.channel.name});

  }
  render() {
    return(
      <div className="twitch-container">

        <div className="reddit-container">

          <div className="reddit-container-stream">
            {this.props.twitchVideos ?
              <div>
                <div className="icon-bar">
                  <span onClick={this.handleSearch.bind(this, 'world+of+warcraft')} className="active"><img className="icon-bar-image" src="http://vignette2.wikia.nocookie.net/wowwiki/images/b/b6/WoW_Cataclysm.png/revision/latest?cb=20101226185655"></img></span>
                  <span onClick={this.handleSearch.bind(this, 'eve+online')}><img className="icon-bar-image" src="http://orig11.deviantart.net/15f9/f/2011/045/2/7/eve_online_dock_icon_by_slowmman-d39khph.png"></img></span>
                  <span onClick={this.handleSearch.bind(this, 'guild+wars')}><img className="icon-bar-image" src="http://icons.iconarchive.com/icons/3xhumed/mega-games-pack-23/256/Guildwars-1-icon.png"></img></span>
                  <span onClick={this.handleSearch.bind(this, 'maple+story')}><img className="icon-bar-image" src="http://vignette2.wikia.nocookie.net/wowwiki/images/b/b6/WoW_Cataclysm.png/revision/latest?cb=20101226185655"></img></span>
                  <span onClick={this.handleSearch.bind(this, 'path+of+exile')}><img className="icon-bar-image" src="http://orig04.deviantart.net/b5d7/f/2013/344/a/b/path_of_exile___icon_by_blagoicons-d6xgjw0.png"></img></span>
                  <span onClick={this.handleSearch.bind(this, 'wildstar')}><img className="icon-bar-image" src="http://orig11.deviantart.net/6fb3/f/2014/158/b/8/wildstar_dock_icon_by_outlawninja-d7lgl9b.png"></img></span>
                </div>
                <TwitchVideoList videos={this.props.twitchVideos} getVideo={this.getVideo.bind(this)} />
              </div>
              : null}
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
export default connect(mapStateToProps, { fetchTwitchVideos })(TwitchWidget);
