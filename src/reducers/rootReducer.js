
import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer';


const rootReducer = combineReducers({
  youtube: youtubeReducer

});

export default rootReducer;
