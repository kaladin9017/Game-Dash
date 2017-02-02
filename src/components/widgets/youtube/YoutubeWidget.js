import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const YOUTUBE_API_KEY= "AIzaSyDXG0ix7GCK3i4l52t-XsY-_8pw3MBiL08";
import YTSearch from 'youtube-api-search';

// actions
import {changeYoutubeVideos} from '../../../actions/index';


// components
import VideoDetail from './video-detail';
import SearchBar from './SearchBar';
import VideoList from './video-list';


class YoutubeWidget extends Component {
  constructor (props) {
    super (props);

    this.state = {videos: []};
    this.videoSearch(this.props.search);
  }

  handleSelect(video) {
    this.setState({selectedVideo: video});
  }

  videoSearch(term) {
    YTSearch( {key: YOUTUBE_API_KEY, term: term} , (videos) => {
      this.setState(
        {
          videos: videos,
          selectedVideo: videos[0]
        });
    });

  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term);}, 500);

    return(
      <div>
        <div id="top">
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.handleSelect.bind(this)}
          videos={this.state.videos}
          />
      </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {search: state.youtube.search};
}

export default connect(mapStateToProps)(YoutubeWidget);
