import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function filtersReducer(state = initialState.filters, action) {
  switch (action.type) {
    case types.UPDATE_FILTERS:
      return action.filters;

    default:
      return state;
  }
}
