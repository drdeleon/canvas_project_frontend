import * as types from '../types/announcements';

export const startFetchingAnnouncements = () => ({
    type: types.ANNOUNCEMENTS_FETCH_STARTED,
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

export const startFetchingAnnouncement = announcement => ({
    type: types.ANNOUNCEMENT_FETCH_STARTED,
    payload: announcement,
});

export const completeFetchingAnnouncement = announcement => ({
    type: types.ANNOUNCEMENT_FETCH_COMPLETED,
    payload: announcement,
});

export const failFetchingAnnouncement = (announcement, error) => ({
    type: types.ANNOUNCEMENT_FETCH_FAILED,
    payload: {
        announcement,
        error,
    },
});

export const startAddingAnnouncement = announcement => ({
    type: types.ANNOUNCEMENTS_ADD_STARTED,
    payload: announcement,
});

export const completeAddingAnnouncement = (oldId, announcement) => ({
    type: types.ANNOUNCEMENTS_ADD_COMPLETED,
    payload: {
        oldId,
        announcement,
    },
});

export const failAddingAnnouncement = (oldId, error) => ({
    type: types.ANNOUNCEMENTS_ADD_FAILED,
    payload: {
        oldId,
        error,
    },
});

export const startRemovingAnnouncement = id => ({
    type: types.ANNOUNCEMENTS_REMOVE_STARTED,
    payload: {
        id,
    },
});

export const completeRemovingAnnouncement = () => ({
    type: types.ANNOUNCEMENTS_REMOVE_COMPLETED,
});

export const failRemovingAnnouncement = (id, error) => ({
    type: types.ANNOUNCEMENTS_REMOVE_FAILED,
    payload: {
        id,
        error,
    },
});
