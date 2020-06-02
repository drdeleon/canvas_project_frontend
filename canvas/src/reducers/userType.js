import { combineReducers } from 'redux';

import * as types from '../types/userType';

const selected = (state = null, action) => {
    switch (action.type) {
        case types.USER_TYPE_SELECTED:
            {
                return action.payload; // index
            }
        default:
            return state;
    }
};

const userType = combineReducers({
    selected,
});

export default userType;

// Selectores locales.
export const getSelectedUserType = state => state.selected;