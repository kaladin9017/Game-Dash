import {
  EVE_MAIL_FETCH_HEADERS,
  EVE_MAIL_WRITE_TOKENS,
  EVE_MAIL_FETCH_CHARACTER_NAMES,
  EVE_MAIL_CHANGE_UPDATE_STAGE,
  EVE_MAIL_GET_MAIL_BODY,
  EVE_MAIL_MAIL_HEADER_DISPLAY_IS_HEADERS,
  EVE_MAIL_GET_NEW_ACCESS_TOKEN_WITH_REFRESH_TOKEN
  } from './types';
import axios from 'axios';

export function eveMailWriteTokens(authToken, updateStage) {
  let tokenData = axios.post('/api/fetchAuthorizationCode', {
    authToken: authToken
  })
  .then((data) => {
    let tokenDataObj = {};
    tokenDataObj.tokenData = data;
    tokenDataObj.updateStage = updateStage;
    tokenDataObj.accessTokenRefreshTime = Date.now() + 900000;
    return tokenDataObj;
  });

  return {
    type: EVE_MAIL_WRITE_TOKENS,
    payload: tokenData
  };
}



export function eveMailFetchHeaders(charId, authToken, updateStage, force, lastHeader) {
  let mailHeaders = {};
  if (localStorage.getItem("mailHeaders") && force == false) {
    updateStage = 3;
    mailHeaders.headers = JSON.parse(localStorage.getItem("mailHeaders"));
    mailHeaders.updateStage = updateStage;
  } else {
    let newAuthToken = "Bearer " + authToken;
    let baseUrl = 'https://esi.tech.ccp.is/latest/characters/' + charId + '/mail/?';
    if (lastHeader) {
      baseUrl = baseUrl + 'last_mail_id=' + lastHeader + '&datasource=tranquility';
    } else {
      baseUrl += '?datasource=tranquility';
    }
    mailHeaders = axios({
      method: "get",
      url: baseUrl,
      headers: {
        Authorization: newAuthToken,
        Accept: 'application/json'
      }
    })
    .then((data) => {
      mailHeaders.headers = data.data;
      mailHeaders.updateStage = updateStage;
      return mailHeaders;
    });
  }
  return {
    type: EVE_MAIL_FETCH_HEADERS,
    payload: mailHeaders
  };
}



export function eveMailFetchCharacterNames (headerData, updateStage) {
  let refinedData = headerData;
  let idStr = '';
  refinedData.forEach((ele, ind, arr) => {
    if (ind == arr.length -1) {
      idStr += ele.from;
    } else {
      idStr = idStr + ele.from + '%2C';
    }
  });
  let url = 'https://esi.tech.ccp.is/latest/characters/names/?character_ids=';
  url = url + idStr + '&datasource=tranquility';
  let charNameData = axios({
    method: "get",
    url: url,
    headers: {
      Accept: 'application/json'
    }
  })
  .then((data) => {
    let nameData = data.data;
    refinedData.forEach((ele, ind, arr) => {
      ele.from = nameData[ind].character_name;
    });
    localStorage.setItem("mailHeaders", JSON.stringify(refinedData));
    let charNameDataObj = {};
    charNameDataObj.charNameData = refinedData;
    charNameDataObj.updateStage = updateStage;
    return charNameDataObj;
  });

  return {
    type: EVE_MAIL_FETCH_CHARACTER_NAMES,
    payload: charNameData
  };
}



export function changeUpdateStage (stage) {
  return {
    type: EVE_MAIL_CHANGE_UPDATE_STAGE,
    payload: stage
  };
}



export function eveMailGetMailBody (charId, authToken, mailId, from) {
  let url = `https://esi.tech.ccp.is/latest/characters/${charId}/mail/${mailId}/?datasource=tranquility`;
  let authorization = `Bearer ${authToken}`;
  let mailItem = axios({
    method: 'get',
    url: url,
    headers: {
      Accept: 'application/json',
      Authorization: authorization
    }
  })
  .then((data) => {
    let mailItem = data.data;
    mailItem.from = from;
    return mailItem;
  });

  return {
    type: EVE_MAIL_GET_MAIL_BODY,
    payload: mailItem
  };
}



export function eveMailMailHeaderDisplayIsHeaders () {
  return {
    type: EVE_MAIL_MAIL_HEADER_DISPLAY_IS_HEADERS
  };
}



export function eveMailGetNewAccessTokenWithRefreshToken () {


  return {
    type: EVE_MAIL_GET_NEW_ACCESS_TOKEN_WITH_REFRESH_TOKEN,
    payload: null
  };
}
