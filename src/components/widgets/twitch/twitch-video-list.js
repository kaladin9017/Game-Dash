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

    <div className="tbl-content">
      <table cellPadding="0" cellSpacing="0" border="0">
        <tbody>
          {videoItems}
        </tbody>
      </table>
  </div>
  );
};

export default TwitchVideoList;
