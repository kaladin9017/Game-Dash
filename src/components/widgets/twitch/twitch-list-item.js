import React from 'react';

const VideoListItem = ({video, key, getVideo}) => {
  return (
    <li className="list-group-item">
    <div className="video-list media">
      <div className="media-left">
        <span className="twitch-social-list-item" key={key} onClick={getVideo.bind(this, video)}>
          <img className="twitch-stream-icons" src={video.channel['video_banner']} />
        </span>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.channel.name}</div>
      </div>
    </div>
    </li>
  );

};


export default VideoListItem;


{/* <div>{video.channel.name}</div> */}
