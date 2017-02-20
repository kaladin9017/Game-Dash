import { GET_WOW_ITEM_DETAILS } from '../actions/types';

const initialState = {description: '', source: 0, itemLevel: 0, itemClass: 0,  quality: 0, sellPrice: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_WOW_ITEM_DETAILS:
    return action.payload.data;
  }

  return state;

}
