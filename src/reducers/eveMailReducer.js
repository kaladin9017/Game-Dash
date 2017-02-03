import { YOUTUBE_SEARCH_TERM } from '../actions/types';


const initialState = {
  search: 'eve-mail'
};

export default function (state = initialState, action) {
  switch (action.type) {
  case YOUTUBE_SEARCH_TERM:

  }
  return state;
}
