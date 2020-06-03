import * as types from '../types/userType';

export const selectUserType = index => ({
    type: types.USER_TYPE_SELECTED,
    payload: index,
});