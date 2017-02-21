import React from 'react';
import VideoListItem from './video-list-items';
import CSS from './styles/youtubestyle.css';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = {props.onVideoSelect}
        video={video}
        key={video.etag}  />
    );
  });

  return(
    <ul className="col-md-4 list-group" id="vidlist">
      {videoItems}
    </ul>
  );
};

export default VideoList;
