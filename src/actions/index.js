import { YOUTUBE_SEARCH_TERM,
         GET_TWITCH_VIDEOS,
         GET_WOW_RELM_STATUS,
         GET_WOW_ITEM_DETAILS,
         SAVE_WOW_ITEM,
         DELETE_WOW_ITEM,
         GET_SUB_REDDIT,
         GET_REDDIT_ACCESS_TOKEN } from './types';

import axios from 'axios';
import $ from 'jquery';
import Querystring from 'querystring';
const qs = require('qs');

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
  let response = axios.get(`https://api.twitch.tv/kraken/search/streams?query=${term}&live=true`, config);
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

export function getWowItemDetails(entry) {
  let response = axios.get(`https://us.api.battle.net/wow/item/${entry}?locale=en_US&apikey=${process.env.WOW_API_KEY}`);

  return {
    type: GET_WOW_ITEM_DETAILS,
    payload: response
  };

}
export function saveWowItem(item) {

  return {
    type: SAVE_WOW_ITEM,
    payload: item
  };

}

// Reddit Actions

export function getRedditAccessToken(code) {

  const config = {
    url: 'https://www.reddit.com/api/v1/access_token',
    method: 'post',
    headers: {
      "Authorization": "Basic ZnNRUzVpZXNyNmJpUFE6T2FIZGJGYkRqaVRPNDFNdFRmM1lTS18tbWY4",
      "Content-type": "application/x-www-form-urlencoded"
    },
    params: {
      grant_type: 'authorization_code',
      code: code
    },
    paramsSerializer: function(params) {
      return Querystring.stringify(params)+"&redirect_uri=http://localhost:8000/twitch";
    }
  };
  let response = axios(config);

  return {
    type: GET_REDDIT_ACCESS_TOKEN,
    payload: response
  };

}

export function getSubReddit(access_token, token_type) {
  const config = {
    url: 'https://oauth.reddit.com/r/wow?show=new&limit=15',
    method: 'get',
    headers: {
      "Authorization": `${token_type} ${access_token}`
    }
  };
  let response = axios(config);
  return {
    type: GET_SUB_REDDIT,
    payload: response
  };

}
