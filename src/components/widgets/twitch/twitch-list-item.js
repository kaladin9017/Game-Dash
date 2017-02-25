import React from 'react';

const VideoListItem = ({video, key, getVideo}) => {
  return (
    <tr>
      <td>
        <span className="twitch-social-list-item" key={key} onClick={getVideo.bind(this, video)}>
          <img className="twitch-stream-icons" src={video.channel['video_banner']} />
        </span>
      </td>
      <td>{video.channel.name}</td>
    </tr>
  );

};


export default VideoListItem;


{/* <div>{video.channel.name}</div> */}
