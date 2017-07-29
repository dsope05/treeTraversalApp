import { combineReducers } from 'redux';

const woke = (
  state = {
    woke: 'stay' 
  }
  , action) => {

  switch (action.type) {
    case 'STAY_WOKE':
      return Object.assign({}, state, {});
    default:
      return state;
  }

  }

const wokeApp = combineReducers({
  woke
});

export default wokeApp


