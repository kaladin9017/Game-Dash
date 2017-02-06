
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import twitchReducer from './twitchReducer';
import eveMailReducer from './eveMailReducer';


const rootReducer = combineReducers({
  youtube: youtubeReducer,
  twitchVideos: twitchReducer,
  eveMail: eveMailReducer
});

export default rootReducer;
