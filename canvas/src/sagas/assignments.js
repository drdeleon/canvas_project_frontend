import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { API_BASE_URL } from '../settings';
import * as selectors from '../reducers';
import * as actions from '../actions/assignments';
import * as authActions from '../actions/auth';
import * as types from '../types/assignments';
import * as schemas from '../schemas/assignments';


// FETCH STUDENT ASSIGNMENTS
function* fetchAssignments(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/students/${user.student}/assignments/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                const {
                    entities: { assignments },
                    result,
                } = normalize(jsonResult, schemas.assignments);


                yield put(actions.completeFetchingAssignments(assignments, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingAssignments('Error en la conexión con el servidor.'));
    }
};

export function* watchAssignmentsFetch() {
    yield takeEvery(
        types.ASSIGNMENTS_FETCH_STARTED,
        fetchAssignments,
    );
};

// FETCH ASSIGNMENT
function* fetchAssignment(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/assignments/${action.payload.id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(actions.completeFetchingAssignment(jsonResult));

            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingAssignment('Error en la conexión con el servidor.'));
    }
};

export function* watchAssignmentFetch() {
    yield takeEvery(
        types.ASSIGNMENT_FETCH_STARTED,
        fetchAssignment,
    );
};


// EDIT ASSIGNMENT
function* editAssignment(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/assignments/${action.payload.id}/`, {
                    method: 'PATCH',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(
                    actions.completeEditingAssignment(
                        jsonResult,
                    ),
                );
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(authActions.failLogin('Error en la conexión.'));
    }
};

export function* watchEditAssignment() {
    yield takeEvery(
        types.ASSIGNMENT_EDIT_STARTED,
        editAssignment,
    );
};

// SCORE ASSIGNMENT
function* scoreAssignment(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/assignment/${action.payload.id}/`, {
                    method: 'PATCH',
                    body: JSON.stringify({
                        score: action.payload.score
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(
                    actions.completeScoringAssignment(
                        jsonResult,
                    ),
                );
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(authActions.failLogin('Error en la conexión.'));
    }
};

export function* watchScoreAssignment() {
    yield takeEvery(
        types.ASSIGNMENT_SCORE_STARTED,
        scoreAssignment,
    );
};

// FETCH COURSE ASSIGNMENTS
function* fetchCourseAssignments(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/${action.payload.courseId}/assignments/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                const {
                    entities: { assignments },
                    result,
                } = normalize(jsonResult, schemas.assignments);


                yield put(actions.completeFetchingCourseAssignments(assignments, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingCourseAssignments('Error en la conexión con el servidor.'));
    }
};

export function* watchCourseAssignmentsFetch() {
    yield takeEvery(
        types.COURSE_ASSIGNMENTS_FETCH_STARTED,
        fetchCourseAssignments,
    );
};

// ADD COURSE ASSIGNMENT
function* addCourseAssignment(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/assignments/`, {
                    method: 'POST',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(
                    actions.completeAddingCourseAssignment(
                        action.payload.id,
                        jsonResult,
                    ),
                );
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(authActions.failLogin('Error en la conexión.'));
    }
};

export function* watchAddCourseAssignment() {
    yield takeEvery(
        types.COURSE_ASSIGNMENT_ADD_STARTED,
        addCourseAssignment,
    );
};

// REMOVE COURSE ASSIGNMENT
function* removeCourseAssignment(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/course/${action.payload.courseId}/delete-assignment/`, {
                    method: 'POST',
                    body: JSON.stringify(action.payload.title),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                yield put(actions.completeRemovingCourseAssignment());
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        // yield put(authActions.failLogin('Error en la conexión'));
    }
};

export function* watchRemoveCourseAssignment() {
    yield takeEvery(
        types.COURSE_ASSIGNMENT_REMOVE_STARTED,
        removeCourseAssignment,
    );
};