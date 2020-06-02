import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth, * as authSelectors from './auth';
import userType, * as userTypeSelectors from './userType';
import assignment, * as assignmentsSelectors from './assignment';
import navbar, * as navbarSelectors from './navbar';
import studentCourses, * as studentCoursesSelectors from './studentCourses';
import professorCourses, * as professorCoursesSelectors from './professorCourses';

const reducer = combineReducers({
    //reductores
    auth,
    userType,
    assignment,
    navbar,
    studentCourses,
    professorCourses,
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
export const getProfessorCourse = (state, id) => professorCoursesSelectors.getProfessorCourse(state.professorCourses, id);
export const getProfessorCourses = state => professorCoursesSelectors.getProfessorCourses(state.professorCourses);
export const getIsFetchingProfessorCourses = state => professorCoursesSelectors.getIsFetchingProfessorCourses(state.professorCourses);
export const getIsCreatingProfessorCourse = state => professorCoursesSelectors.getIsCreatingProfessorCourse(state.professorCourses);
export const getIsRemovingProfessorCourse = state => professorCoursesSelectors.getIsRemovingProfessorCourse(state.professorCourses);
export const getIsEditingProfessorCourse = state => professorCoursesSelectors.getIsEditingProfessorCourse(state.professorCourses);
export const getProfessorCoursesError = state => professorCoursesSelectors.getProfessorCoursesError(state.professorCourses);