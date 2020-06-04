import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/assignments';

/* 
    FORMA REDUCTOR:
        -   order
        -   byId
        -   selected
        -   isFetching
        -   isCreating
        -   isRemoving
        -   isEditting
        -   isGrading
        -   isSubmitting
        -   error
*/

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.ASSIGNMENTS_FETCH_COMPLETED:
        case types.COURSE_ASSIGNMENTS_FETCH_COMPLETED:
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

        case types.COURSE_ASSIGNMENT_ADD_COMPLETED:
            {
                const assignment = action.payload;

                state[assignment.id] = {
                    ...assignment,
                }

                return state;
            }

        case types.COURSE_ASSIGNMENT_REMOVE_COMPLETED:
            {
                return omit(state, action.payload.id);
            }

        case types.ASSIGNMENT_EDIT_COMPLETED:
            {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }

        case types.ASSIGNMENT_SCORE_COMPLETED:
            {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }

        case types.ASSIGNMENT_SUBMIT_COMPLETED:
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
        case types.ASSIGNMENTS_FETCH_COMPLETED:
        case types.COURSE_ASSIGNMENTS_FETCH_COMPLETED:
            {
                return union(action.payload.order);
            }

        case types.COURSE_ASSIGNMENT_ADD_COMPLETED:
            {
                return [...state, action.payload.id];
            }

        case types.COURSE_ASSIGNMENT_REMOVE_COMPLETED:
            {
                return state.filter(id => id !== action.payload.id);
            }

        default:
            {
                return state;
            }
    }
};

const selected = (state = null, action) => {
    switch (action.type) {
        case types.ASSIGNMENT_FETCH_COMPLETED:
            {
                return action.payload;
            }

        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.ASSIGNMENTS_FETCH_COMPLETED:
        case types.COURSE_ASSIGNMENTS_FETCH_COMPLETED:
        case types.ASSIGNMENTS_FETCH_FAILED:
            {
                return false;
            }

        case types.ASSIGNMENTS_FETCH_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isCreating = (state = false, action) => {
    switch (action.type) {
        case types.COURSE_ASSIGNMENT_ADD_COMPLETED:
        case types.COURSE_ASSIGNMENT_ADD_FAILED:
            {
                return false;
            }

        case types.COURSE_ASSIGNMENT_ADD_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isRemoving = (state = false, action) => {
    switch (action.type) {
        case types.COURSE_ASSIGNMENT_REMOVE_COMPLETED:
        case types.COURSE_ASSIGNMENT_REMOVE_FAILED:
            {
                return false;
            }

        case types.COURSE_ASSIGNMENT_REMOVE_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isEditting = (state = false, action) => {
    switch (action.type) {
        case types.ASSIGNMENT_EDIT_COMPLETED:
        case types.ASSIGNMENT_EDIT_FAILED:
            {
                return false;
            }

        case types.ASSIGNMENT_EDIT_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isScoring = (state = false, action) => {
    switch (action.type) {
        case types.ASSIGNMENT_SCORE_COMPLETED:
        case types.ASSIGNMENT_SCORE_FAILED:
            {
                return false;
            }

        case types.ASSIGNMENT_SCORE_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isSubmitting = (state = false, action) => {
    switch (action.type) {
        case types.ASSIGNMENT_SUBMIT_COMPLETED:
        case types.ASSIGNMENT_SUBMIT_FAILED:
            {
                return false;
            }
        case types.ASSIGNMENT_SUBMIT_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.ASSIGNMENTS_FETCH_STARTED:
        case types.ASSIGNMENTS_FETCH_COMPLETED:
        case types.ASSIGNMENT_FETCH_STARTED:
        case types.ASSIGNMENT_FETCH_COMPLETED:
        case types.COURSE_ASSIGNMENT_ADD_STARTED:
        case types.COURSE_ASSIGNMENT_ADD_COMPLETED:
        case types.COURSE_ASSIGNMENT_REMOVE_STARTED:
        case types.COURSE_ASSIGNMENT_REMOVE_COMPLETED:
        case types.ASSIGNMENT_EDIT_STARTED:
        case types.ASSIGNMENT_EDIT_COMPLETED:
        case types.ASSIGNMENT_SCORE_STARTED:
        case types.ASSIGNMENT_SCORE_COMPLETED:
        case types.ASSIGNMENT_SUBMIT_STARTED:
        case types.ASSIGNMENT_SUBMIT_COMPLETED:
            {
                return null;
            }

        case types.ASSIGNMENTS_FETCH_FAILED:
        case types.ASSIGNMENT_FETCH_FAILED:
        case types.COURSE_ASSIGNMENT_ADD_FAILED:
        case types.ASSIGNMENT_EDIT_FAILED:
        case types.ASSIGNMENT_SCORE_FAILED:
        case types.ASSIGNMENT_SUBMIT_FAILED:
            {
                return action.payload.error;
            }
        default:
            {
                return state;
            }
    };
};

const assignments = combineReducers({
    byId,
    order,
    isFetching,
    isCreating,
    isRemoving,
    isEditting,
    isScoring,
    isSubmitting,
    error,
    selected,
});

export default assignments;

export const getAssignment = (state, id) => state.byId[id];
export const getAssignments = state => state.order.map(id => getAssignment(state, id));
export const getIsFetchingAssignments = state => state.isFetching;
export const getIsCreatingAssignment = state => state.isCreating;
export const getIsRemovingAssignment = state => state.isRemoving;
export const getIsEdittingAssignment = state => state.isEditting;
export const getIsScoringAssignment = state => state.isScoring;
export const getIsSubmittingAssignment = state => state.isSubmitting;
export const getAssignmentError = state => state.error;
export const getSelectedAssignment = state => state.selected;