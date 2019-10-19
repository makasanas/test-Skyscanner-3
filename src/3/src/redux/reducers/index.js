import { combineReducers } from 'redux';
import { GET_DATA } from '../actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_DATA}_LOADING`:
      return {
        ...state,
      };
    case `${GET_DATA}_SUCCESS`:
      return {
        ...state,
        data: action.payload,
      };
    case `${GET_DATA}_ERROR`:
      return {
        ...state,
        error: 'error',
      };
    default:
      return {
        ...state,
      };
  }
};

export default combineReducers({
  // reducers
  reducer,
});
