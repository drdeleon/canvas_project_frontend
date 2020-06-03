import * as types from '../types/courses';

// FETCHING
export const startFetchingCourses = () => ({
    type: types.COURSES_FETCH_STARTED,
});

export const completeFetchingCourses = (entities, order) => ({
    type: types.COURSES_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingCourses = error => ({
    type: types.COURSES_FETCH_FAILED,
    payload: {
        error,
    },
});

// ADDING 
export const startAddingCourse = Course => ({
    type: types.COURSE_ADD_STARTED,
    payload: Course,
});

export const completeAddingCourse = (oldId, Course) => ({
    type: types.COURSE_ADD_COMPLETED,
    payload: {
        oldId,
        Course,
    },
});

export const failAddingCourse = (oldId, error) => ({
    type: types.COURSE_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

// REMOVING
export const startRemovingCourse = id => ({
    type: types.COURSE_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingCourse = () => ({
    type: types.COURSE_REMOVE_COMPLETED,
});

export const failRemovingCourse = (id, error) => ({
    type: types.COURSE_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

// EDITING
export const startEditingCourse = Course => ({
    type: types.COURSE_EDIT_STARTED,
    payload: {
        Course,
    },
});

export const completeEditingCourse = Course => ({
    type: types.COURSE_EDIT_COMPLETED,
    payload: {
        Course,
    },
});

export const failEditingCourse = error => ({
    type: types.COURSE_EDIT_FAILED,
    payload: {
        error,
    },
});