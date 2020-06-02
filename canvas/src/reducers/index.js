import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth, * as authSelectors from './auth';
import assignment, * as assignmentsSelectors from './assignment';
import navbar, * as navbarSelectors from './navbar';
import studentCourses, * as studentCoursesSelectors from './studentCourses';

const reducer = combineReducers({
    //reductores
    auth,
    assignment,
    navbar,
    studentCourses,
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

//  ASSIGNMENT SELECTORS
export const getAssignment = (state, id) => assignmentsSelectors.getAssignment(state.assignment, id);
export const getAssignments = state => assignmentsSelectors.getAssignments(state.assignment);
export const getIsFetchingAssignments = state => assignmentsSelectors.getIsFetchingAssignments(state.assignment);
export const getIsCreatingAssignment = state => assignmentsSelectors.getIsCreatingAssignment(state.assignment);
export const getIsRemovingAssignment = state => assignmentsSelectors.getIsRemovingAssignment(state.assignment);
export const getIsEdittingAssignment = state => assignmentsSelectors.getIsEdittingAssignment(state.assignment);
export const getIsScoringAssignment = state => assignmentsSelectors.getIsScoringAssignment(state.assignment);
export const getIsSubmittingAssignment = state => assignmentsSelectors.getIsSubmittingAssignment(state.assignment);
export const getAssignmentError = state => assignmentsSelectors.getAssignmentError(state.assignment);

// NAVBAR SELECTORS
export const getSelectedNavbarElement = state => navbarSelectors.getSelectedNavbarElement(state.navbar);

// STUDENT COURSES SELECTORS
export const getStudentCourse = (state, id) => studentCoursesSelectors.getStudentCourse(state.studentCourses, id);
export const getStudentCourses = state => studentCoursesSelectors.getStudentCourses(state.studentCourses);
export const getIsFetchingStudentCourses = state => studentCoursesSelectors.getIsFetchingStudentCourses(state.studentCourses);
export const getIsCreatingStudentCourse = state => studentCoursesSelectors.getIsCreatingStudentCourse(state.studentCourses);
export const getIsRemovingStudentCourse = state => studentCoursesSelectors.getIsRemovingStudentCourse(state.studentCourses);
export const getIsEditingStudentCourse = state => studentCoursesSelectors.getIsEditingStudentCourse(state.studentCourses);
export const getStudentCoursesError = state => studentCoursesSelectors.getStudentCoursesError(state.studentCourses);

// PROFESSOR COURSES SELECTORS
export const getProfessorCourse = (state, id) => studentCoursesSelectors.getProfessorCourse(state.studentCourses, id);
export const getProfessorCourses = state => studentCoursesSelectors.getProfessorCourses(state.studentCourses);
export const getIsFetchingProfessorCourses = state => studentCoursesSelectors.getIsFetchingProfessorCourses(state.studentCourses);
export const getIsCreatingProfessorCourse = state => studentCoursesSelectors.getIsCreatingProfessorCourse(state.studentCourses);
export const getIsRemovingProfessorCourse = state => studentCoursesSelectors.getIsRemovingProfessorCourse(state.studentCourses);
export const getIsEditingProfessorCourse = state => studentCoursesSelectors.getIsEditingProfessorCourse(state.studentCourses);
export const getProfessorCoursesError = state => studentCoursesSelectors.getProfessorCoursesError(state.studentCourses);