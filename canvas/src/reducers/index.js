import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth, * as authSelectors from './auth';
import userType, * as userTypeSelectors from './userType';
import assignments, * as assignmentsSelectors from './assignments';
import navbar, * as navbarSelectors from './navbar';
import courses, * as coursesSelectors from './courses';
import announcement, * as announcementSelectors from './announcement';

const reducer = combineReducers({
    //reductores
    auth,
    userType,
    assignments,
    navbar,
    courses,
    announcement,
    form: formReducer,
});


export default reducer;

// AUTH SELECTORS
export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getLoggedUser = state => authSelectors.getLoggedUser(state.auth);
export const getIsAuthenticated = state => getAuthToken(state) != null;
export const getAuthUserID = state => authSelectors.getAuthUserID(state.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsRefreshing = state => authSelectors.getIsRefreshing(state.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.auth);
export const getRefreshingError = state => authSelectors.getRefreshingError(state.auth);

// USER TYPE SELECTORS
export const getSelectedUserType = state => userTypeSelectors.getSelectedUserType(state.userType);

//  ASSIGNMENT SELECTORS
export const getAssignment = (state, id) => assignmentsSelectors.getAssignment(state.assignments, id);
export const getAssignments = state => assignmentsSelectors.getAssignments(state.assignments);
export const getIsFetchingAssignments = state => assignmentsSelectors.getIsFetchingAssignments(state.assignments);
export const getIsCreatingAssignment = state => assignmentsSelectors.getIsCreatingAssignment(state.assignments);
export const getIsRemovingAssignment = state => assignmentsSelectors.getIsRemovingAssignment(state.assignments);
export const getIsEdittingAssignment = state => assignmentsSelectors.getIsEdittingAssignment(state.assignments);
export const getIsScoringAssignment = state => assignmentsSelectors.getIsScoringAssignment(state.assignments);
export const getIsSubmittingAssignment = state => assignmentsSelectors.getIsSubmittingAssignment(state.assignments);
export const getAssignmentError = state => assignmentsSelectors.getAssignmentError(state.assignments);
export const getSelectedAssignment = state => assignmentsSelectors.getSelectedAssignment(state.assignments);

// NAVBAR SELECTORS
export const getSelectedNavbarElement = state => navbarSelectors.getSelectedNavbarElement(state.navbar);

// COURSES SELECTORS
export const getCourse = (state, id) => coursesSelectors.getCourse(state.courses, id);
export const getCourses = state => coursesSelectors.getCourses(state.courses);
export const getIsFetchingCourses = state => coursesSelectors.getIsFetchingCourses(state.courses);
export const getIsCreatingCourse = state => coursesSelectors.getIsCreatingCourse(state.courses);
export const getIsRemovingCourse = state => coursesSelectors.getIsRemovingCourse(state.courses);
export const getIsEditingCourse = state => coursesSelectors.getIsEditingCourse(state.courses);
export const getCoursesError = state => coursesSelectors.getCoursesError(state.courses);

// ANNOUNCEMENT SELECTORS
export const getAnnouncement = (state, id) => announcementSelectors.getAnnouncement(state.announcement, id);
export const getAnnouncements = state => announcementSelectors.getAnnouncements(state.announcement);
export const getIsFetchingAnnouncement = state => announcementSelectors.getIsFetchingAnnouncement(state.announcement);
export const getIsCreatingAnnouncement = state => announcementSelectors.getIsCreatingAnnouncement(state.announcement);
export const getIsRemovingAnnouncement = state => announcementSelectors.getIsRemovingAnnouncement(state.announcement);
export const getAnnouncementError = state => announcementSelectors.getAnnouncementError(state.announcement);
export const getSelectedAnnouncement = state => announcementSelectors.getSelectedAnnouncement(state.announcement);