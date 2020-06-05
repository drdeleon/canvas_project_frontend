import * as types from '../types/announcements';

// COURSE ANNOUNCEMENTS FETCH
export const startFetchingAnnouncements = (courseId) => ({
    type: types.ANNOUNCEMENTS_FETCH_STARTED,
    payload: courseId,
});

export const completeFetchingAnnouncements = (entities, order) => ({
    type: types.ANNOUNCEMENTS_FETCH_COMPLETED,
    payload: {
        entities,
        order,
    },
});

export const failFetchingAnnouncements = error => ({
    type: types.ANNOUNCEMENTS_FETCH_FAILED,
});

// ANNOUNCEMENT FETCH
export const startFetchingAnnouncement = id => ({
    type: types.ANNOUNCEMENT_FETCH_STARTED,
    payload: {
        id,
    },
});

export const completeFetchingAnnouncement = announcement => ({
    type: types.ANNOUNCEMENT_FETCH_COMPLETED,
    payload: announcement,
});

export const failFetchingAnnouncement = (error) => ({
    type: types.ANNOUNCEMENT_FETCH_FAILED,
    payload: {
        error,
    },
});

// COURSE ANNOUNCEMENT ADD
export const startAddingAnnouncement = (courseId, announcement) => ({
    type: types.ANNOUNCEMENT_ADD_STARTED,
    payload: {
        courseId,
        announcement,
    },
});

export const completeAddingAnnouncement = (oldId, announcement) => ({
    type: types.ANNOUNCEMENT_ADD_COMPLETED,
    payload: {
        oldId,
        announcement,
    },
});

export const failAddingAnnouncement = (oldId, error) => ({
    type: types.ANNOUNCEMENT_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

// COURSE ANNOUNCEMENT REMOVE 
export const startRemovingAnnouncement = (id) => ({
    type: types.ANNOUNCEMENT_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingAnnouncement = (id) => ({
    type: types.ANNOUNCEMENT_REMOVE_COMPLETED,
    payload: {
        id,
    }
});

export const failRemovingAnnouncement = (id, error) => ({
    type: types.ANNOUNCEMENT_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});
