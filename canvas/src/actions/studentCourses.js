import * as types from '../types/studentCourses';

// FETCHING
export const startFetchingStudentCourses = () => ({
    type: types.STUDENT_COURSES_FETCH_STARTED,
});

export const completeFetchingStudentCourses = (entities, order) => ({
    type: types.STUDENT_COURSES_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingStudentCourses = error => ({
    type: types.STUDENT_COURSES_FETCH_FAILED,
    payload: {
        error,
    },
});

// ADDING 
export const startAddingStudentCourse = StudentCourse => ({
    type: types.STUDENT_COURSE_ADD_STARTED,
    payload: StudentCourse,
});

export const completeAddingStudentCourse = (oldId, StudentCourse) => ({
    type: types.STUDENT_COURSE_ADD_COMPLETED,
    payload: {
        oldId,
        StudentCourse,
    },
});

export const failAddingStudentCourse = (oldId, error) => ({
    type: types.STUDENT_COURSE_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

// REMOVING
export const startRemovingStudentCourse = id => ({
    type: types.STUDENT_COURSE_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingStudentCourse = () => ({
    type: types.STUDENT_COURSE_REMOVE_COMPLETED,
});

export const failRemovingStudentCourse = (id, error) => ({
    type: types.STUDENT_COURSE_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

// EDITING
export const startEditingStudentCourse = StudentCourse => ({
    type: types.STUDENT_COURSE_EDIT_STARTED,
    payload: {
        StudentCourse,
    },
});

export const completeEditingStudentCourse = StudentCourse => ({
    type: types.STUDENT_COURSE_EDIT_COMPLETED,
    payload: {
        StudentCourse,
    },
});

export const failEditingStudentCourse = error => ({
    type: types.STUDENT_COURSE_EDIT_FAILED,
    payload: {
        error,
    },
});