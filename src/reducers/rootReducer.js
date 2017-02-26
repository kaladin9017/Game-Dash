
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import twitchReducer from './twitchReducer';
import eveMailReducer from './eveMailReducer';

import wowRelmReducer from './wowRelmReducer';
import wowArmoryReducer from './wowArmoryReducer';
import wowSavedItemsReducer from './wowSavedItemsReducer';

import sideBarReducer from './sideBarReducer';

import redditReducer from './redditReducer';

const rootReducer = combineReducers({
  games: sideBarReducer,
  youtube: youtubeReducer,
  twitchVideos: twitchReducer,
  eveMail: eveMailReducer,
  wowRelms: wowRelmReducer,
  wowArmory: wowArmoryReducer,
  wowSavedItems: wowSavedItemsReducer,
  reddit: redditReducer

});

export default rootReducer;
