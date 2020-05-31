import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/studentCourses';

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
    switch (action.payload) {
        case types.STUDENT_COURSES_FETCH_COMPLETED:
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

        case types.STUDENT_COURSE_ADD_COMPLETED:
            {
                const studentCourses = action.payload;

                state[studentCourses.id] = {
                    ...studentCourses,
                }

                return state;
            }

        case types.STUDENT_COURSE_REMOVE_COMPLETED:
            {
                return omit(state, action.payload.id);
            }

        case types.STUDENT_COURSE_EDIT_COMPLETED:
            {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }

        case types.STUDENT_COURSE_SCORE_COMPLETED:
            {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }

        case types.STUDENT_COURSE_SUBMIT_COMPLETED:
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
    switch (action.payload) {
        case types.STUDENT_COURSES_FETCH_COMPLETED:
            {
                return union(action.payload.order);
            }

        case types.STUDENT_COURSE_ADD_COMPLETED:
            {
                return [...state, action.payload.id];
            }

        case types.STUDENT_COURSE_REMOVE_COMPLETED:
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
    switch (action.payload) {
        case types.STUDENT_COURSES_FETCH_STARTED:
            {
                return true;
            }

        case types.STUDENT_COURSES_FETCH_COMPLETED:
        case types.STUDENT_COURSES_FETCH_FAILED:
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
    switch (action.payload) {
        case types.STUDENT_COURSE_ADD_STARTED:
            {
                return true;
            }

        case types.STUDENT_COURSE_ADD_COMPLETED:
        case types.STUDENT_COURSE_ADD_FAILED:
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
    switch (action.payload) {
        case types.STUDENT_COURSE_REMOVE_STARTED:
            {
                return true;
            }

        case types.STUDENT_COURSE_REMOVE_COMPLETED:
        case types.STUDENT_COURSE_REMOVE_FAILED:
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
    switch (action.payload) {
        case types.STUDENT_COURSE_EDIT_STARTED:
            {
                return true;
            }

        case types.STUDENT_COURSE_EDIT_COMPLETED:
        case types.STUDENT_COURSE_EDIT_FAILED:
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
    switch (action.payload) {
        case types.STUDENT_COURSES_FETCH_STARTED:
        case types.STUDENT_COURSES_FETCH_COMPLETED:
        case types.STUDENT_COURSE_ADD_STARTED:
        case types.STUDENT_COURSE_ADD_COMPLETED:
        case types.STUDENT_COURSE_REMOVE_STARTED:
        case types.STUDENT_COURSE_REMOVE_COMPLETED:
        case types.STUDENT_COURSE_EDIT_STARTED:
        case types.STUDENT_COURSE_EDIT_COMPLETED:
        case types.STUDENT_COURSE_SCORE_STARTED:
        case types.STUDENT_COURSE_SCORE_COMPLETED:
        case types.STUDENT_COURSE_SUBMIT_STARTED:
        case types.STUDENT_COURSE_SUBMIT_COMPLETED:
            {
                return null;
            }
        case types.STUDENT_COURSES_FETCH_FAILED:
            {
                return action.payload.error;
            }

        case types.STUDENT_COURSE_ADD_FAILED:
            {
                return action.payload.error;
            }

        case types.STUDENT_COURSE_EDIT_FAILED:
            {
                return action.payload.error;
            }

        case types.STUDENT_COURSE_SCORE_FAILED:
            {
                return action.payload.error;
            }

        case types.STUDENT_COURSE_SUBMIT_FAILED:
            {
                return action.payload.error;
            }

        default:
            {
                return state;
            }
    };
};

export default combineReducers({
    byId,
    order,
    isFetching,
    isCreating,
    isRemoving,
    isEditing,
    error,
});

export const getStudentCourse = (state, id) => state.byId[id];
export const getStudentCourses = state => state.order.map(id => getStudentCourse(state, id));
export const getIsFetchingStudentCourses = state => state.isFetching;
export const getIsCreatingStudentCourse = state => state.isCreating;
export const getIsRemovingStudentCourse = state => state.isRemoving;
export const getIsEditingStudentCourse = state => state.isEditing;
export const getStudentCoursesError = state => state.error;