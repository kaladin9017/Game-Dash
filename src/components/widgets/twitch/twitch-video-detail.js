import React from 'react';

const TwitchVideoDetail = ({channel}) => {
  return(
    <div>

      <iframe
        src={`http://player.twitch.tv/?channel=${channel}`}
        height="620"
        width="100%"
        frameBorder="0"
        scrolling="no"
        allowFullScreen="true">
    </iframe>

    </div>
  );

};

export default TwitchVideoDetail;
