import { YOUTUBE_SERACH_TERM } from '../actions/types';


const initialState = {
  search: 'world of warcraft'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case YOUTUBE_SERACH_TERM:
    return action.payload;
  }

  return state;

}
