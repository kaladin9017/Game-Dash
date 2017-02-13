import axios from 'axios';

const initialState = {
  authUrl: "https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2FeveToken&client_id=81577ff7ba9943ca8b95aef5656bc783&scope=esi%2Dmail%2Eorganize%5Fmail%2Ev1%20esi%2Dmail%2Eread%5Fmail%2Ev1%20esi%2Dmail%2Esend%5Fmail%2Ev1&state=uniquestate123",
  token: null,
  characterId: 1948822847,
  accessToken: null,
  refreshToken: null,
  mailHeaders: null,
  updateStage: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
  case 'EVE_MAIL_FETCH_HEADERS':
    return Object.assign({}, state, {
      mailHeaders: action.payload.headers,
      updateStage: action.payload.updateStage
    });
  case 'EVE_MAIL_WRITE_TOKENS':
    return Object.assign({}, state, {
      accessToken: action.payload.tokenData.data.access_token,
      refreshToken: action.payload.tokenData.data.refresh_token,
      updateStage: action.payload.updateStage
    });
  case 'EVE_MAIL_FETCH_CHARACTER_NAMES':
    return Object.assign({}, state, {
      mailHeaders: action.payload.charNameData,
      updateStage: action.payload.updateStage
    });
  case 'EVE_MAIL_CHANGE_UPDATE_STAGE':
    return Object.assign({}, state, {
      updateStage: action.payload
    });
  }
  return state;
}
