import { EVE_MAIL_FETCH_HEADERS, EVE_MAIL_WRITE_TOKENS } from '../actions/types';
import axios from 'axios';

const initialState = {
  authUrl: "https://login.eveonline.com/oauth/authorize/?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2FeveToken&client_id=81577ff7ba9943ca8b95aef5656bc783&scope=esi%2Dmail%2Eorganize%5Fmail%2Ev1%20esi%2Dmail%2Eread%5Fmail%2Ev1%20esi%2Dmail%2Esend%5Fmail%2Ev1&state=uniquestate123",
  token: null,
  characterId: 1948822847,
  accessToken: null,
  refreshToken: null,
  mailHeaders: null
};

export default function (state = initialState, action) {
  switch (action.type) {
  case 'EVE_MAIL_FETCH_HEADERS':
    console.log(action.payload);
    return state;
  case 'EVE_MAIL_WRITE_TOKENS':
    return Object.assign({}, state, {
      accessToken: action.payload.data.access_token,
      refreshToken: action.payload.data.refresh_token
    });
  }
  return state;
}
