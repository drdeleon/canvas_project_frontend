import jwtDecode from 'jwt-decode';
import { combineReducers } from 'redux';

import * as types from '../types/auth';

const token = (state = null, action) => {
    switch(action.payload) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }

        case types.AUTHENTICATION_COMPLETED: {
            return action.payload.token;
        }

        case types.AUTHENTICATION_FAILED: {
            return null;
        }

        case types.AUTHENTICATION_IDENTITY_CLEARED: {
            return null;
        }

        case types.TOKEN_REFRESH_COMPLETED: {
            return action.payload.newToken;
        }

        default: {
            return state;
        }
    };
};

const decoded = (state = null, action) => {
    switch(action.payload) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }

        case types.AUTHENTICATION_COMPLETED: {
            return jwtDecode(action.payload.token);
        }

        case types.AUTHENTICATION_FAILED: {
            return null;
        }

        case types.AUTHENTICATION_IDENTITY_CLEARED: {
            return null;
        }

        case types.TOKEN_REFRESH_COMPLETED: {
            return jwtDecode(action.payload.newToken);
        }

        default: {
            return state;
        }
    };
};

const isAutenticating = (state = false, action) => {
    switch(action.payload) {
        case types.AUTHENTICATION_STARTED: {
            return true;
        }

        case types.AUTHENTICATION_COMPLETED: {
            return false;
        }

        case types.AUTHENTICATION_FAILED: {
            return false;
        }

        default: {
            return state;
        }
    };
};

const isRefreshing = (state = false, action) => {
    switch(action.payload) {
        case types.TOKEN_REFRESH_STARTED: {
            return true;
        }

        case types.TOKEN_REFRESH_COMPLETED: {
            return false;
        }

        case types.TOKEN_REFRESH_FAILED: {
            return false
        }

        default: {
            return state;
        }
    };
};

const authenticatingError = (state = null, action) => {
    switch(action.payload) {
        case types.AUTHENTICATION_STARTED: {
            return null;
        }

        case types.AUTHENTICATION_COMPLETED: {
            return null;
        }

        case types.AUTHENTICATION_FAILED: {
            return action.payload.error;
        }

        default: {
            return state;
        }
    }
}

const refreshingError = (state = null, action) => {
    switch(action.payload) {
        case types.TOKEN_REFRESH_STARTED: {
            return null;
        }

        case types.TOKEN_REFRESH_COMPLETED: {
            return null;
        }

        case types.TOKEN_REFRESH_FAILED: {
            return action.payload.error;
        }

        default: {
            return state;
        }
    }
}

const auth = combineReducers({
    token, 
    decoded,
    isAutenticating,
    isRefreshing, 
    authenticatingError,
});

export default auth;

export const getAuthToken = state => state.token;
export const getAuthUserID = state => state.decoded ? state.decoded_userid : null;
export const getAuthExpiration = state => state.decoded ? state.decoded.exp : null;
export const getAuthUsername = state => state.decoded ? state.decoded.username : null;
export const getIsAuthenticating = state => state.isAutenticating;
export const getIsRefreshing = state => state.isRefreshing;
export const getAuthenticatingError = state => state.authenticatingError;
export const getRefreshingError = state => state.refreshingError;