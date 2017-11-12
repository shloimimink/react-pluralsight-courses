import {combineReducers} from 'redux';
import courses from './courseReducer';
import filters from './filtersReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  filters
});

export default rootReducer;
