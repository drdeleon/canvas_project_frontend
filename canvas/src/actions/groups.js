import * as types from '../types/groups';

// FETCH STUDENT GROUPS
export const startFetchingGroups = () => ({
    type: types.GROUPS_FETCH_STARTED,
});

export const completeFetchingGroups = (entities, order) => ({
    type: types.GROUPS_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingGroups = error => ({
    type: types.GROUPS_FETCH_FAILED,
    payload: {
        error,
    },
});

// FETCH GROUP
export const startFetchingGroup = id => ({
    type: types.GROUP_FETCH_STARTED,
    payload: {
        id,
    },
});

export const completeFetchingGroup = Group => ({
    type: types.GROUP_FETCH_COMPLETED,
    payload: Group,
});

export const failFetchingGroup = error => ({
    type: types.GROUP_FETCH_FAILED,
    payload: {
        error,
    },
});

// EDIT GROUP
export const startEditingGroup = Group => ({
    type: types.GROUP_EDIT_STARTED,
    payload: Group,
});

export const completeEditingGroup = Group => ({
    type: types.GROUP_EDIT_COMPLETED,
    payload: Group,
});

export const failEditingGroup = error => ({
    type: types.GROUP_EDIT_FAILED,
    payload: {
        error
    },
});

// REMOVE GROUP
export const startRemovingGroup = (courseId, title) => ({
    type: types.GROUP_REMOVE_STARTED,
    payload: {
        courseId,
        title,
    },
});

export const completeRemovingGroup = () => ({
    type: types.GROUP_REMOVE_COMPLETED,
});

export const failRemovingGroup = (id, error) => ({
    type: types.GROUP_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});

// FETCH COURSE GROUPS
export const startFetchingCourseGroups = (courseId) => ({
    type: types.COURSE_GROUPS_FETCH_STARTED,
    payload: courseId,
});

export const completeFetchingCourseGroups = (entities, order) => ({
    type: types.COURSE_GROUPS_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingCourseGroups = error => ({
    type: types.COURSE_GROUPS_FETCH_FAILED,
    payload: {
        error,
    },
});

// ADD COURSE GROUP
export const startAddingCourseGroup = (courseId, Group) => ({
    type: types.COURSE_GROUP_ADD_STARTED,
    payload: {
        courseId,
        Group,
    },
});

export const completeAddingCourseGroup = (oldId, Group) => ({
    type: types.COURSE_GROUP_ADD_COMPLETED,
    payload: {
        oldId,
        Group,
    },
});

export const failAddingCourseGroup = (oldId, error) => ({
    type: types.COURSE_GROUP_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});