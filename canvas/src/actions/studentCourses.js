import * as types from '../types/studentCourses';

// FETCHING
export const startFetchingStudentCourses = () => ({
    type: types.STUDENTCOURSE_FETCH_STARTED,
});

export const completeFetchingStudentCourses = (entities, order) => ({
    type: types.STUDENTCOURSE_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingStudentCourses = error => ({
    type: types.STUDENTCOURSE_FETCH_FAILED,
    payload: {
        error,
    },
});

// ADDING 
export const startAddingStudentCourse = StudentCourse => ({
    type: types.STUDENTCOURSE_ADD_STARTED,
    payload: StudentCourse,
});

export const completeAddingStudentCourse = (oldId, StudentCourse) => ({
    type: types.STUDENTCOURSE_ADD_COMPLETED,
    payload: {
        oldId,
        StudentCourse,
    },
});

export const failAddingStudentCourse = (oldId, error) => ({
    type: types.STUDENTCOURSE_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

// REMOVING
export const startRemovingStudentCourse = id => ({
    type: types.STUDENTCOURSE_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingStudentCourse = () => ({
    type: types.STUDENTCOURSE_REMOVE_COMPLETED,
});

export const failRemovingStudentCourse = (id, error) => ({
    type: types.STUDENTCOURSE_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

// EDITING
export const startEditingStudentCourse = StudentCourse => ({
    type: types.STUDENTCOURSE_EDIT_STARTED,
    payload: {
        StudentCourse,
    },
});

export const completeEditingStudentCourse = StudentCourse => ({
    type: types.STUDENTCOURSE_EDIT_COMPLETED,
    payload: {
        StudentCourse,
    },
});

export const failEditingStudentCourse = error => ({
    type: types.STUDENTCOURSE_EDIT_FAILED,
    payload: {
        error,
    },
});