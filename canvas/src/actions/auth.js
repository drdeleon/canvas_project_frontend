import * as types from '../types/auth';

export const startLogin = (username, email, password) => ({
    type: types.AUTHENTICATION_STARTED,
    payload: {
        username,
        email,
        password,
    },
});

export const completeLogin = (token, user) => ({
    type: types.AUTHENTICATION_COMPLETED,
    payload: {
        token,
        user,
    },
});

export const failLogin = error => ({
    type: types.AUTHENTICATION_FAILED,
    payload: {
        error
    },
});

export const logout = () => ({
    type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startTokenRefresh = () => ({
    type: types.TOKEN_REFRESH_STARTED,
});

export const completeTokenRefresh = newToken => ({
    type: types.TOKEN_REFRESH_COMPLETED,
    payload: {
        newToken,
    },
});

export const failTokenRefresh = error => ({
    type: types.TOKEN_REFRESH_FAILED,
    payload: {
        error,
    },
});