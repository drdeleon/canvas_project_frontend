import * as types from '../types/assignment';

export const startFetchingAssignment = () => ({
    type: types.ASSIGNMENT_FETCH_STARTED,
});

export const completeFetchingAssignment = (entities, order) => ({
    type: types.ASSIGNMENT_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingAssignment = error => ({
    type: types.ASSIGNMENT_FETCH_FAILED,
    payload: {
        error,
    },
});

export const startAddingAssignment = assignment => ({
    type: types.ASSIGNMENT_ADD_STARTED,
    payload: assignment,
});

export const completeAddingAssignment = (oldId, assignment) => ({
    type: types.ASSIGNMENT_ADD_COMPLETED,
    payload: {
        oldId, 
        assignment,
    },
});

export const failAddingAssignment = (oldId, error) => ({
    type: types.ASSIGNMENT_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

export const startRemovingAssignment = id => ({
    type: types.ASSIGNMENT_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingAssignment = () => ({
    type: types.ASSIGNMENT_REMOVE_COMPLETED,
});

export const failRemovingAssignment = (id, error) => ({
    type: types.ASSIGNMENT_REMOVE_FAILED,
    payload: {
        id, 
        error,
    },
});

export const startScoringAssignment = id => ({
    type: types.ASSIGNMENT_SCORE_STARTED,
    payload: {
        id,
    },
});

export const completeScoringAssignment = (id, oldScore, newScore) => ({
    type: types.ASSIGNMENT_SCORE_COMPLETED,
    payload: {
        id,
        oldScore, 
        newScore,
    },
});

export const failScoringAssignment = (id, error) => ({
    type: types.ASSIGNMENT_SCORE_FAILED,
    payload: {
        id,
        error,
    },
});

export const startSubmittingAssignment = (id, assignment) => ({
    type: types.ASSIGNMENT_SUBMIT_STARTED,
    payload: {
        id, 
        assignment,
    },
});

export const completeSubmittingAssignment = id  => ({
    type: types.ASSIGNMENT_SUBMIT_COMPLETED,
    payload: {
        id,
    },
});

export const failSubmittingAssignment = (id, error) => ({
    type: types.ASSIGNMENT_SUBMIT_FAILED,
    payload: {
        id,
        error,
    },
});

export const startEdittingAssignment = assignment => ({
    type: types.ASSIGNMENT_EDIT_STARTED,
    payload: {
        assignment,
    },
});

export const completeEdittingAssignment = assignment => ({
    type: types.ASSIGNMENT_EDIT_COMPLETED,
    payload: {
        assignment,
    },
});

export const failEdittingAssignment = error => ({
    type: types.ASSIGNMENT_EDIT_FAILED,
    payload: {
        error
    },
});