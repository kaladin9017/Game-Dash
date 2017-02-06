import { GET_WOW_RELM_STATUS } from '../actions/types';

const initialState = {realms: []};

export default function (state = initialState, action) {
  switch (action.type) {
  case GET_WOW_RELM_STATUS:
    return action.payload.data;
  }

  return state;

}
