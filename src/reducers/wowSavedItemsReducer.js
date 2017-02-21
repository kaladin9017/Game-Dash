import { SAVE_WOW_ITEM, DELETE_WOW_ITEM } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
  case DELETE_WOW_ITEM:
    return action.payload.data;
  case SAVE_WOW_ITEM:
    return state.concat(action.payload);
  }

  return state;

}
