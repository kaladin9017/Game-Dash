import {EVE_MAIL_FETCH_HEADERS, EVE_MAIL_WRITE_TOKENS} from './types';
import axios from 'axios';

export function eveMailWriteTokens(authToken) {
  let tokenData = axios.post('/api/fetchAuthorizationCode', {
    authToken: authToken
  });
  return {
    type: EVE_MAIL_WRITE_TOKENS,
    payload: tokenData
  };
}

export function eveMailFetchHeaders(charId, authToken, LastHeader) {
  let newAuthToken = "Bearer " + authToken;
  console.log(newAuthToken);
  let baseUrl = 'https://esi.tech.ccp.is/latest/characters/' + charId + '/mail/?';
  if (LastHeader) {
    baseUrl = baseUrl + 'last_mail_id=' + LastHeader + '&datasource=tranquility';
  } else {
    baseUrl += '?datasource=tranquility';
  }
  let headerData = axios({
    method: "get",
    url: baseUrl,
    headers: {
      Authorization: newAuthToken,
      Accept: 'application/json'
    }
  })
  .catch((err) => {
    alert(err);
  })
  ;
  //https://esi.tech.ccp.is/latest/characters/1948822847/mail/?datasource=tranquility
  //https://esi.tech.ccp.is/latest/characters/1948822847/mail/?last_mail_id=363459428&datasource=tranquility
  return {
    type: EVE_MAIL_FETCH_HEADERS,
    payload: headerData
  };
}
