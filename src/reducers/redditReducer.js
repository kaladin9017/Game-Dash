import { GET_SUB_REDDIT, GET_REDDIT_ACCESS_TOKEN } from '../actions/types';


const initialState = { access_token: '', scope: '', token_type: '', articles: [] };

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_REDDIT_ACCESS_TOKEN:
    return Object.assign({}, state,
      { access_token: action.payload.data.access_token,
        scope: action.payload.data.scope,
        token_type: action.payload.data.token_type
      });
  case GET_SUB_REDDIT:
    return Object.assign({}, state,
      { articles: action.payload.data.data.children });
  }

  return state;

}
