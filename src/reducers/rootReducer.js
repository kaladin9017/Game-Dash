
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';
import eveMailReducer from './eveMailReducer';


const rootReducer = combineReducers({
  youtube: youtubeReducer,
  eveMail: eveMailReducer
});

export default rootReducer;
