import * as types from '../types/assignments';

// FETCH STUDENT ASSIGNMENTS
export const startFetchingAssignments = () => ({
    type: types.ASSIGNMENTS_FETCH_STARTED,
});

export const completeFetchingAssignments = (entities, order) => ({
    type: types.ASSIGNMENTS_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingAssignments = error => ({
    type: types.ASSIGNMENTS_FETCH_FAILED,
    payload: {
        error,
    },
});

// FETCH ASSIGNMENT
export const startFetchingAssignment = id => ({
    type: types.ASSIGNMENT_FETCH_STARTED,
    payload: {
        id,
    },
});

export const completeFetchingAssignment = Assignment => ({
    type: types.ASSIGNMENT_FETCH_COMPLETED,
    payload: Assignment,
});

export const failFetchingAssignment = error => ({
    type: types.ASSIGNMENT_FETCH_FAILED,
    payload: {
        error,
    },
});

// SCORE ASSIGNMENT
export const startScoringAssignment = (id, score) => ({
    type: types.ASSIGNMENT_SCORE_STARTED,
    payload: {
        id,
        score,
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

// EDIT ASSIGNMENT
export const startEditingAssignment = Assignment => ({
    type: types.ASSIGNMENT_EDIT_STARTED,
    payload: Assignment,
});

export const completeEditingAssignment = Assignment => ({
    type: types.ASSIGNMENT_EDIT_COMPLETED,
    payload: Assignment,
});

export const failEditingAssignment = error => ({
    type: types.ASSIGNMENT_EDIT_FAILED,
    payload: {
        error
    },
});

// REMOVE COURSE ASSIGNMENT
export const startRemovingCourseAssignment = (courseId, title) => ({
    type: types.COURSE_ASSIGNMENT_REMOVE_STARTED,
    payload: {
        courseId,
        title,
    },
});

export const completeRemovingCourseAssignment = () => ({
    type: types.COURSE_ASSIGNMENT_REMOVE_COMPLETED,
});

export const failRemovingCourseAssignment = (id, error) => ({
    type: types.COURSE_ASSIGNMENT_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

// FETCH COURSE ASSIGNMENTS
export const startFetchingCourseAssignments = (courseId) => ({
    type: types.COURSE_ASSIGNMENTS_FETCH_STARTED,
    payload: courseId,
});

export const completeFetchingCourseAssignments = (entities, order) => ({
    type: types.COURSE_ASSIGNMENTS_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingCourseAssignments = error => ({
    type: types.COURSE_ASSIGNMENTS_FETCH_FAILED,
    payload: {
        error,
    },
});

// ADD COURSE ASSIGNMENT
export const startAddingCourseAssignment = (courseId, Assignment) => ({
    type: types.COURSE_ASSIGNMENT_ADD_STARTED,
    payload: {
        courseId,
        Assignment,
    },
});

export const completeAddingCourseAssignment = (oldId, Assignment) => ({
    type: types.COURSE_ASSIGNMENT_ADD_COMPLETED,
    payload: {
        oldId,
        Assignment,
    },
});

export const failAddingCourseAssignment = (oldId, error) => ({
    type: types.COURSE_ASSIGNMENT_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});