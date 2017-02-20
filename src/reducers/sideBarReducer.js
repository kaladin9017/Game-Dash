import { ADD_WIDGET, REMOVE_WIDGET } from '../actions/types';


const initialState = {
  Eve: ['evemail'],
  WorldOfWarcraft: ['armory', 'relmstatus'],
  Misc: ['tv', 'food', 'youtube', 'twitch', 'fifteen']
};

export default function (state = initialState, action) {
  switch (action.type) {
  case ADD_WIDGET:
    return action.payload;
  }

  return state;

}
