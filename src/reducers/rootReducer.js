
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import twitchReducer from './twitchReducer';
import wowRelmReducer from './wowRelmReducer';

const rootReducer = combineReducers({
  youtube: youtubeReducer,
  twitchVideos: twitchReducer,
  wowRelms: wowRelmReducer

});

export default rootReducer;
