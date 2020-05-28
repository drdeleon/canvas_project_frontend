import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth, * as authSelectors from './auth';
import assignment, * as assignmentsSelectors from './assignment';

const reducer = combineReducers({
    //reductores
    auth,
    assignment,
    form: formReducer,
});


export default reducer;

// AUTH SELECTORS
export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsRefreshing = state => authSelectors.getIsRefreshing(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);

//  ASSIGNMENT SELECTORS
export const getAssignment = (state, id) => assignmentsSelectors.getAssignment(state.assignment, id); 
export const getAssignments = state => assignmentsSelectors.getAssignments(state.assignment);
export const getIsFetchingAssignments = state  => assignmentsSelectors.getIsFetchingAssignments(state.assignment); 
export const getIsCreatingAssignment = state => assignmentsSelectors.getIsCreatingAssignment(state.assignment); 
export const getIsRemovingAssignment = state => assignmentsSelectors.getIsRemovingAssignment(state.assignment);
export const getIsEdittingAssignment = state => assignmentsSelectors.getIsEdittingAssignment(state.assignment);
export const getIsScoringAssignment = state => assignmentsSelectors.getIsScoringAssignment(state.assignment);
export const getIsSubmittingAssignment = state=> assignmentsSelectors.getIsSubmittingAssignment(state.assignment);
export const getError = state => assignmentsSelectors.getError(state.assignment);
