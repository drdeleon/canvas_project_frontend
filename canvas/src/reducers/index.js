import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';

const reducer = combineReducers({
    //reductores
    auth,
});

export default reducer;

// AUTH SELECTORS
export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(satate.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsRefreshing = state => authSelectors.getIsRefreshing(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);
