
import { YOUTUBE_SEARCH_TERM, GET_TWITCH_VIDEOS, GET_WOW_RELM_STATUS } from './types';

import axios from 'axios';

const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const WOW_API_KEY = process.env.WOW_API_KEY;

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
      'Client-ID': TWITCH_CLIENT_ID
    }
  };
  let response = axios.get(`https://api.twitch.tv/kraken/search/streams?query=${term}`, config);
  return {
    type: GET_TWITCH_VIDEOS,
    payload: response
  };
}
export function getWowRelmStatus() {
  let response = axios.get(`https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=${WOW_API_KEY}`);
  return {
    type: GET_WOW_RELM_STATUS,
    payload: response
  };
}
