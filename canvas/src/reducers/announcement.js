import { combineReducers, bindActionCreators } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/announcements';
import { getAssignments } from './assignments';

/*
    FORMA REDUCTOR:
        order
        byId
        isFetching
        isCreating
        isRemoving
        error
*/


const byId = (state = {}, action) => {
    switch (action.type) {
        case types.ANNOUNCEMENTS_FETCH_COMPLETED:
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

        case types.ANNOUNCEMENT_FETCH_STARTED:
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

        case types.ANNOUNCEMENT_ADD_COMPLETED:
            {
                const announcement = action.payload;

                state[announcement.id] = {
                    ...announcement,
                }

                return state;
            }

        case types.ANNOUNCEMENT_REMOVE_COMPLETED:
            {
                return omit(state, action.payload.id);
            }

        default:
            {
                return state;
            }
    };
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.ANNOUNCEMENTS_FETCH_COMPLETED:
            {
                return union(action.payload.id);
            }

        case types.ANNOUNCEMENT_FETCH_COMPLETED:
            {
                return union(action.payload.id);
            }

        case types.ANNOUNCEMENT_ADD_COMPLETED:
            {
                return [...state, action.payload.id];
            }

        case types.ANNOUNCEMENT_REMOVE_COMPLETED:
            {
                return state.filter(id => id !== action.payload.id);
            }

        default:
            {
                return state;
            }
    };
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.ANNOUNCEMENTS_FETCH_STARTED:
            {
                return true;
            }

        case types.ANNOUNCEMENTS_FETCH_COMPLETED:
            {
                return false;
            }

        case types.ANNOUNCEMENTS_FETCH_FAILED:
            {
                return false;
            }

        case types.ANNOUNCEMENT_FETCH_STARTED:
            {
                return true;
            }

        case types.ANNOUNCEMENT_FETCH_COMPLETED:
            {
                return false;
            }

        case types.ANNOUNCEMENT_FETCH_FAILED:
            {
                return false;
            }

        default:
            {
                return false;
            }
    };
};

const isCreating = (state = false, action) => {
    switch (action.type) {
        case types.ANNOUNCEMENT_ADD_STARTED:
            {
                return true;
            }

        case types.ANNOUNCEMENT_ADD_COMPLETED:
            {
                return false;
            }

        case types.ANNOUNCEMENT_ADD_FAILED:
            {
                return false;
            }

        default:
            {
                return state;
            }
    };
};

const isRemoving = (state = false, action) => {
    switch (action.type) {
        case types.ANNOUNCEMENT_REMOVE_STARTED:
            {
                return true;
            }

        case types.ANNOUNCEMENT_REMOVE_COMPLETED:
            {
                return false;
            }

        case types.ANNOUNCEMENT_REMOVE_FAILED:
            {
                return false
            }

        default:
            {
                return state;
            }
    };
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.ANNOUNCEMENTS_FETCH_STARTED:
            {
                return null;
            }

        case types.ANNOUNCEMENTS_FETCH_COMPLETED:
            {
                return null;
            }

        case types.ANNOUNCEMENTS_FETCH_FAILED:
            {
                return action.payload.error;
            }

        case types.ANNOUNCEMENT_FETCH_STARTED:
            {
                return null;
            }

        case types.ANNOUNCEMENT_FETCH_COMPLETED:
            {
                return null;
            }

        case types.ANNOUNCEMENT_FETCH_FAILED:
            {
                return action.payload.error;
            }

        case types.ANNOUNCEMENT_ADD_STARTED:
            {
                return null;
            }

        case types.ANNOUNCEMENT_ADD_COMPLETED:
            {
                return null;
            }

        case types.ANNOUNCEMENT_ADD_FAILED:
            {
                return action.payload.error;
            }

        case types.ANNOUNCEMENT_REMOVE_STARTED:
            {
                return null;
            }

        case types.ANNOUNCEMENT_REMOVE_COMPLETED:
            {
                return null;
            }

        case types.ANNOUNCEMENT_REMOVE_FAILED:
            {
                return action.payload.error;
            }

        default:
            {
                return state;
            }
    };

};

export default combineReducers({
    order,
    byId,
    isFetching,
    isCreating,
    isRemoving,
    error,
});

export const getAnnouncement = (state, id) => state.byId[id];
export const getAnnouncements = state => state.order.map(id => getAnnouncement(state, id));
export const getIsFetchingAnnouncement = state => state.isFetching;
export const getIsCreatingAnnouncement = state => state.isCreating;
export const getIsRemovingAnnouncement = state => state.isRemoving;
export const getAnnouncementError = state => state.error;