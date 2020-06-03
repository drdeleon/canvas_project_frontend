import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/courses';

/* 
    FORMA REDUCTOR:
        -   order
        -   byId
        -   isFetching
        -   isCreating
        -   isRemoving
        -   isEditing
        -   error
*/

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.COURSES_FETCH_COMPLETED:
            {
                const { entities, order } = action.payload;
                const newState = {...state };

                order.forEach(id => {
                    newState[id] = {
                        ...entities[id],
                    };
                });

                return newState;
            }

        case types.COURSE_ADD_COMPLETED:
            {
                const courses = action.payload;

                state[courses.id] = {
                    ...courses,
                }

                return state;
            }

        case types.COURSE_REMOVE_COMPLETED:
            {
                return omit(state, action.payload.id);
            }

        case types.COURSE_EDIT_COMPLETED:
            {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }

        default:
            {
                return state;
            }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.COURSES_FETCH_COMPLETED:
            {
                return union(action.payload.order);
            }

        case types.COURSE_ADD_COMPLETED:
            {
                return [...state, action.payload.id];
            }

        case types.COURSE_REMOVE_COMPLETED:
            {
                return state.filter(id => id !== action.payload.id);
            }

        default:
            {
                return state;
            }
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.COURSES_FETCH_STARTED:
            {
                return true;
            }

        case types.COURSES_FETCH_COMPLETED:
        case types.COURSES_FETCH_FAILED:
            {
                return false;
            }

        default:
            {
                return state;
            }
    };
};

const isCreating = (state = false, action) => {
    switch (action.type) {
        case types.COURSE_ADD_STARTED:
            {
                return true;
            }

        case types.COURSE_ADD_COMPLETED:
        case types.COURSE_ADD_FAILED:
            {
                return false;
            }

        default:
            {
                return state;
            }
    };
};

const isRemoving = (state = false, action) => {
    switch (action.type) {
        case types.COURSE_REMOVE_STARTED:
            {
                return true;
            }

        case types.COURSE_REMOVE_COMPLETED:
        case types.COURSE_REMOVE_FAILED:
            {
                return false;
            }

        default:
            {
                return state;
            }
    };
};

const isEditing = (state = false, action) => {
    switch (action.type) {
        case types.COURSE_EDIT_STARTED:
            {
                return true;
            }

        case types.COURSE_EDIT_COMPLETED:
        case types.COURSE_EDIT_FAILED:
            {
                return false;
            }

        default:
            {
                return state;
            }
    };
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.COURSES_FETCH_STARTED:
        case types.COURSES_FETCH_COMPLETED:
        case types.COURSE_ADD_STARTED:
        case types.COURSE_ADD_COMPLETED:
        case types.COURSE_REMOVE_STARTED:
        case types.COURSE_REMOVE_COMPLETED:
        case types.COURSE_EDIT_STARTED:
        case types.COURSE_EDIT_COMPLETED:
            {
                return null;
            }
        case types.COURSES_FETCH_FAILED:
            {
                return action.payload.error;
            }

        case types.COURSE_ADD_FAILED:
            {
                return action.payload.error;
            }

        case types.COURSE_EDIT_FAILED:
            {
                return action.payload.error;
            }

        case types.COURSE_REMOVE_FAILED:
            {
                return action.payload.error;
            }

        default:
            {
                return state;
            }
    };
};

const courses = combineReducers({
    byId,
    order,
    isFetching,
    isCreating,
    isRemoving,
    isEditing,
    error,
});

export default courses;

export const getCourse = (state, id) => state.byId[id];
export const getCourses = state => state.order.map(id => getCourse(state, id));
export const getIsFetchingCourses = state => state.isFetching;
export const getIsCreatingCourse = state => state.isCreating;
export const getIsRemovingCourse = state => state.isRemoving;
export const getIsEditingCourse = state => state.isEditing;
export const getCoursesError = state => state.error;