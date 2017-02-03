import {YOUTUBE_SEARCH_TERM, GET_TWITCH_VIDEOS} from './types';

import axios from 'axios';

export function changeYoutubeVideos(term) {
  return {
    type: YOUTUBE_SEARCH_TERM,
    payload: term
  };
}

export function fetchTwitchVideos(term) {
  let config = {
    headers: {
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': '0kl1apsft0hl4a8bayxw6rqh98bkkl'
    }
  };
  let response = axios.get(`https://api.twitch.tv/kraken/search/streams?query=${term}`, config);
  return {
    type: GET_TWITCH_VIDEOS,
    payload: response
  };
}
