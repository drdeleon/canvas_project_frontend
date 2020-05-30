import * as types from '../types/navbar';

export const selectNavbarElement = index => ({
    type: types.NAVBAR_ELEMENT_SELECTED,
    payload: index,
});