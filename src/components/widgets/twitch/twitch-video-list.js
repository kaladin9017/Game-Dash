import React from 'react';
import TwitchListItem from './twitch-list-item';

const TwitchVideoList  = ({videos, getVideo}) => {
  const videoItems = videos.map((video) => {
    return (
      <TwitchListItem
        video={video}
        key={video['_id']}
        getVideo={getVideo}
      />
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default TwitchVideoList;
