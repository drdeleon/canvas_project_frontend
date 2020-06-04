import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/groups';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.GROUPS_FETCH_COMPLETED:
        case types.COURSE_GROUPS_FETCH_COMPLETED:
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

        case types.COURSE_GROUP_ADD_COMPLETED:
            {
                const group = action.payload;

                state[group.id] = {
                    ...group,
                }

                return state;
            }

        case types.GROUP_REMOVE_COMPLETED:
            {
                return omit(state, action.payload.id);
            }

        case types.GROUP_EDIT_COMPLETED:
            {
                return {
                    ...state,
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        ...action.payload,
                    },
                };
            }

        default:
            {
                return state;
            }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.GROUPS_FETCH_COMPLETED:
        case types.COURSE_GROUPS_FETCH_COMPLETED:
            {
                return union(action.payload.order);
            }

        case types.COURSE_GROUP_ADD_COMPLETED:
            {
                return [...state, action.payload.id];
            }

        case types.GROUP_REMOVE_COMPLETED:
            {
                return state.filter(id => id !== action.payload.id);
            }

        default:
            {
                return state;
            }
    }
};

const selected = (state = null, action) => {
    switch (action.type) {
        case types.GROUP_FETCH_COMPLETED:
            {
                return action.payload;
            }

        default:
            return state;
    }
};

const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.GROUPS_FETCH_COMPLETED:
        case types.COURSE_GROUPS_FETCH_COMPLETED:
        case types.GROUPS_FETCH_FAILED:
            {
                return false;
            }

        case types.GROUPS_FETCH_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isCreating = (state = false, action) => {
    switch (action.type) {
        case types.COURSE_GROUP_ADD_COMPLETED:
        case types.COURSE_GROUP_ADD_FAILED:
            {
                return false;
            }

        case types.COURSE_GROUP_ADD_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isRemoving = (state = false, action) => {
    switch (action.type) {
        case types.GROUP_REMOVE_COMPLETED:
        case types.GROUP_REMOVE_FAILED:
            {
                return false;
            }

        case types.GROUP_REMOVE_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const isEditing = (state = false, action) => {
    switch (action.type) {
        case types.GROUP_EDIT_COMPLETED:
        case types.GROUP_EDIT_FAILED:
            {
                return false;
            }

        case types.GROUP_EDIT_STARTED:
            {
                return true;
            }

        default:
            {
                return state;
            }
    };
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.GROUPS_FETCH_STARTED:
        case types.GROUPS_FETCH_COMPLETED:
        case types.GROUP_FETCH_STARTED:
        case types.GROUP_FETCH_COMPLETED:
        case types.COURSE_GROUP_ADD_STARTED:
        case types.COURSE_GROUP_ADD_COMPLETED:
        case types.GROUP_REMOVE_STARTED:
        case types.GROUP_REMOVE_COMPLETED:
        case types.GROUP_EDIT_STARTED:
        case types.GROUP_EDIT_COMPLETED:
            {
                return null;
            }

        case types.GROUPS_FETCH_FAILED:
        case types.GROUP_FETCH_FAILED:
        case types.COURSE_GROUP_ADD_FAILED:
        case types.GROUP_EDIT_FAILED:
            {
                return action.payload.error;
            }
        default:
            {
                return state;
            }
    };
};

const groups = combineReducers({
    byId,
    order,
    isFetching,
    isCreating,
    isRemoving,
    isEditing,
    error,
    selected,
});

export default groups;

export const getGroup = (state, id) => state.byId[id];
export const getGroups = state => state.order.map(id => getGroup(state, id));
export const getIsFetchingGroups = state => state.isFetching;
export const getIsCreatingGroup = state => state.isCreating;
export const getIsRemovingGroup = state => state.isRemoving;
export const getIsEditingGroup = state => state.isEditing;
export const getGroupError = state => state.error;
export const getSelectedGroup = state => state.selected;