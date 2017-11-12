import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      return[
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return[
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    case types.DELETE_COURSE_SUCCESS:
      return state.filter(course => course.id !== action.courseId);

    case types.UPDATE_FILTERS:
      return state.map(course => {
        return Object.assign(
          {},
          course,
          {show: isShownByFilters(course, action.filters)}
        );
      });

    default:
      return state;
  }
}

function isShownByFilters(course, filters) {
  const keys = Object.keys(filters);

  for (let i = 0; i <= keys.length - 1; i++) {
    const key = keys[i];
    if (filters[key] && course[key].indexOf(filters[key]) === -1) {
      return false;
    }
  }

  return true;
}
