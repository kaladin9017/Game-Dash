import React from 'react';

const VideoListItem = ({video, key}) => {
  console.log(video)
  return (
    <li className="list-group-item" key={key}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.channel['video_banner']} />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.channel.name}</div>
        </div>
      </div>
    </li>
  );

};


export default VideoListItem;
