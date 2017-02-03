import { GET_TWITCH_VIDEOS } from '../actions/types';
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {

  case GET_TWITCH_VIDEOS:
    return action.payload.data.streams;
  }

  return state;

}
