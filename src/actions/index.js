
import { YOUTUBE_SEARCH_TERM, GET_TWITCH_VIDEOS, GET_WOW_RELM_STATUS } from './types';

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
export function getWowRelmStatus() {
  let response = axios.get("https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=4f6q8vb5a8vbmt8p86bs6jkrv4r2edx2");
  return {
    type: GET_WOW_RELM_STATUS,
    payload: response
  };
}
