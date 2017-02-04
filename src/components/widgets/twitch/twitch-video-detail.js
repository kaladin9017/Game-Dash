import React from 'react';

const TwitchVideoDetail = ({channel}) => {
  return(
    <div>

      <iframe
        src={`http://player.twitch.tv/?channel=${channel}`}
        height="720"
        width="1280"
        frameBorder="0"
        scrolling="no"
        allowFullScreen="true">
    </iframe>

    </div>
  );

};

export default TwitchVideoDetail;
