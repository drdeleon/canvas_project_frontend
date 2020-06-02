import * as types from '../types/professorCourses';

// FETCHING
export const startFetchingProfessorCourses = () => ({
    type: types.PROFESSOR_COURSES_FETCH_STARTED,
});

export const completeFetchingProfessorCourses = (entities, order) => ({
    type: types.PROFESSOR_COURSES_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingProfessorCourses = error => ({
    type: types.PROFESSOR_COURSES_FETCH_FAILED,
    payload: {
        error,
    },
});

// ADDING 
export const startAddingProfessorCourse = ProfessorCourse => ({
    type: types.PROFESSOR_COURSE_ADD_STARTED,
    payload: ProfessorCourse,
});

export const completeAddingProfessorCourse = (oldId, ProfessorCourse) => ({
    type: types.PROFESSOR_COURSE_ADD_COMPLETED,
    payload: {
        oldId,
        ProfessorCourse,
    },
});

export const failAddingProfessorCourse = (oldId, error) => ({
    type: types.PROFESSOR_COURSE_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

// REMOVING
export const startRemovingProfessorCourse = id => ({
    type: types.PROFESSOR_COURSE_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingProfessorCourse = () => ({
    type: types.PROFESSOR_COURSE_REMOVE_COMPLETED,
});

export const failRemovingProfessorCourse = (id, error) => ({
    type: types.PROFESSOR_COURSE_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

// EDITING
export const startEditingProfessorCourse = ProfessorCourse => ({
    type: types.PROFESSOR_COURSE_EDIT_STARTED,
    payload: {
        ProfessorCourse,
    },
});

export const completeEditingProfessorCourse = ProfessorCourse => ({
    type: types.PROFESSOR_COURSE_EDIT_COMPLETED,
    payload: {
        ProfessorCourse,
    },
});

export const failEditingProfessorCourse = error => ({
    type: types.PROFESSOR_COURSE_EDIT_FAILED,
    payload: {
        error,
    },
});