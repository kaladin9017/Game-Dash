import {YOUTUBE_SEARCH_TERM, EVE_MAIL_FETCH_HEADERS} from './types';
import axios from 'axios';

export function changeYoutubeVideos(term) {
  return {
    type: YOUTUBE_SEARCH_TERM,
    payload: term
  };
}

export function eveMailFetchHeaders(charId, authToken, LastHeader) {
  let dataBlock;
  let baseUrl = 'https://esi.tech.ccp.is/latest/characters/' + charId + '/mail/?';
  if (LastHeader) {
    baseUrl = baseUrl + 'last_mail_id=' + LastHeader + '&datasource=tranquility';
  } else {
    baseUrl += '?datasource=tranquility';
  }
  axios({
    method: "get",
    url: baseUrl,
    headers: {
      Authorization: authToken,
      Host: 'login.eveonline.com'
    }
  })
  .then((data) => {
    dataBlock = data;
  })
  .catch((err) => {
    alert(err);
  })
  ;
  //https://esi.tech.ccp.is/latest/characters/1948822847/mail/?datasource=tranquility
  //https://esi.tech.ccp.is/latest/characters/1948822847/mail/?last_mail_id=363459428&datasource=tranquility
  return {
    type: EVE_MAIL_FETCH_HEADERS,
    payload: dataBlock
  };
}
