import {YOUTUBE_SEARCH_TERM, EVE_MAIL_FETCH_HEADERS} from './types';

export function changeYoutubeVideos(term) {
  return {
    type: YOUTUBE_SEARCH_TERM,
    payload: term
  };
}

export function eveMailFetchHeaders(charId, LastHeader) {
  let baseUrl = 'https://esi.tech.ccp.is/latest/characters/' + charId + '/mail/?';
  if (LastHeader) {
    baseUrl = baseUrl + 'last_mail_id=' + LastHeader + '&datasource=tranquility';
  } else {
    baseUrl += '?datasource=tranquility';
  }
  axios(
    method: "post",
    url: baseUrl
  )
  //https://esi.tech.ccp.is/latest/characters/1948822847/mail/?datasource=tranquility
  //https://esi.tech.ccp.is/latest/characters/1948822847/mail/?last_mail_id=363459428&datasource=tranquility
  return {
    type: EVE_MAIL_FETCH_HEADERS
  };
}
