
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import twitchReducer from './twitchReducer';


const rootReducer = combineReducers({
  youtube: youtubeReducer,
  twitchVideos: twitchReducer

});

export default rootReducer;
