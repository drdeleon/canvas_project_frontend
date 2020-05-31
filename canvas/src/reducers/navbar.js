import { combineReducers } from 'redux';

import * as types from '../types/navbar';

const selected = (state = 0, action) => {
    switch (action.type) {
        case types.NAVBAR_ELEMENT_SELECTED:
            {
                return action.payload; // index
            }
        default:
            return state;
    }
};

const navbar = combineReducers({
    selected,
});

export default navbar;

// Selectores locales.
export const getSelectedNavbarElement = state => state.selected;