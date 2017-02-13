import React from 'react';

const TwitchChat = ({channel}) => {
  return (
    <iframe frameBorder="0"
        scrolling="no"
        id="chat_embed"
        src={`http://www.twitch.tv/${channel}/chat`}
        height="800px"
        width="800px">
    </iframe>
  );
};

export default TwitchChat;
