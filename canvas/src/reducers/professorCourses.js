import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/professorCourses';

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
        case types.PROFESSOR_COURSES_FETCH_COMPLETED:
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

        case types.PROFESSOR_COURSE_ADD_COMPLETED:
            {
                const professorCourses = action.payload;

                state[professorCourses.id] = {
                    ...professorCourses,
                }

                return state;
            }

        case types.PROFESSOR_COURSE_REMOVE_COMPLETED:
            {
                return omit(state, action.payload.id);
            }

        case types.PROFESSOR_COURSE_EDIT_COMPLETED:
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
        case types.PROFESSOR_COURSES_FETCH_COMPLETED:
            {
                return union(action.payload.order);
            }

        case types.PROFESSOR_COURSE_ADD_COMPLETED:
            {
                return [...state, action.payload.id];
            }

        case types.PROFESSOR_COURSE_REMOVE_COMPLETED:
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
        case types.PROFESSOR_COURSES_FETCH_STARTED:
            {
                return true;
            }

        case types.PROFESSOR_COURSES_FETCH_COMPLETED:
        case types.PROFESSOR_COURSES_FETCH_FAILED:
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
        case types.PROFESSOR_COURSE_ADD_STARTED:
            {
                return true;
            }

        case types.PROFESSOR_COURSE_ADD_COMPLETED:
        case types.PROFESSOR_COURSE_ADD_FAILED:
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
        case types.PROFESSOR_COURSE_REMOVE_STARTED:
            {
                return true;
            }

        case types.PROFESSOR_COURSE_REMOVE_COMPLETED:
        case types.PROFESSOR_COURSE_REMOVE_FAILED:
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
        case types.PROFESSOR_COURSE_EDIT_STARTED:
            {
                return true;
            }

        case types.PROFESSOR_COURSE_EDIT_COMPLETED:
        case types.PROFESSOR_COURSE_EDIT_FAILED:
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
        case types.PROFESSOR_COURSES_FETCH_STARTED:
        case types.PROFESSOR_COURSES_FETCH_COMPLETED:
        case types.PROFESSOR_COURSE_ADD_STARTED:
        case types.PROFESSOR_COURSE_ADD_COMPLETED:
        case types.PROFESSOR_COURSE_REMOVE_STARTED:
        case types.PROFESSOR_COURSE_REMOVE_COMPLETED:
        case types.PROFESSOR_COURSE_EDIT_STARTED:
        case types.PROFESSOR_COURSE_EDIT_COMPLETED:
            {
                return null;
            }
        case types.PROFESSOR_COURSES_FETCH_FAILED:
            {
                return action.payload.error;
            }

        case types.PROFESSOR_COURSE_ADD_FAILED:
            {
                return action.payload.error;
            }

        case types.PROFESSOR_COURSE_EDIT_FAILED:
            {
                return action.payload.error;
            }

        case types.PROFESSOR_COURSE_REMOVE_FAILED:
            {
                return action.payload.error;
            }

        default:
            {
                return state;
            }
    };
};

const professorCourses = combineReducers({
    byId,
    order,
    isFetching,
    isCreating,
    isRemoving,
    isEditing,
    error,
});

export default professorCourses;

export const getProfessorCourse = (state, id) => state.byId[id];
export const getProfessorCourses = state => state.order.map(id => getProfessorCourse(state, id));
export const getIsFetchingProfessorCourses = state => state.isFetching;
export const getIsCreatingProfessorCourse = state => state.isCreating;
export const getIsRemovingProfessorCourse = state => state.isRemoving;
export const getIsEditingProfessorCourse = state => state.isEditing;
export const getProfessorCoursesError = state => state.error;