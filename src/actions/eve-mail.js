import {EVE_MAIL_FETCH_HEADERS, EVE_MAIL_WRITE_TOKENS, EVE_MAIL_FETCH_CHARACTER_NAMES, EVE_MAIL_CHANGE_UPDATE_STAGE} from './types';
import axios from 'axios';

export function eveMailWriteTokens(authToken, updateStage) {
  let tokenData = axios.post('/api/fetchAuthorizationCode', {
    authToken: authToken
  })
  .then((data) => {
    let tokenDataObj = {};
    tokenDataObj.tokenData = data;
    tokenDataObj.updateStage = updateStage;
    return tokenDataObj;
  });
  return {
    type: EVE_MAIL_WRITE_TOKENS,
    payload: tokenData
  };
}

export function eveMailFetchHeaders(charId, authToken, updateStage, LastHeader) {
  let newAuthToken = "Bearer " + authToken;
  let baseUrl = 'https://esi.tech.ccp.is/latest/characters/' + charId + '/mail/?';
  if (LastHeader) {
    baseUrl = baseUrl + 'last_mail_id=' + LastHeader + '&datasource=tranquility';
  } else {
    baseUrl += '?datasource=tranquility';
  }
  let payload = axios({
    method: "get",
    url: baseUrl,
    headers: {
      Authorization: newAuthToken,
      Accept: 'application/json'
    }
  })
  .then((data) => {
    let payloadObj = {};
    payloadObj.headers = data.data;
    payloadObj.updateStage = updateStage;
    return payloadObj;
  });
  return {
    type: EVE_MAIL_FETCH_HEADERS,
    payload: payload
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
