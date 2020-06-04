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
import * as actions from '../actions/groups';
import * as authActions from '../actions/auth';
import * as types from '../types/groups';
import * as schemas from '../schemas/groups';


// FETCH STUDENT GROUPS
function* fetchGroups(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/students/${user.student}/groups/`, {
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
                    entities: { groups },
                    result,
                } = normalize(jsonResult, schemas.groups);


                yield put(actions.completeFetchingGroups(groups, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingGroups('Error en la conexión con el servidor.'));
    }
};

export function* watchGroupsFetch() {
    yield takeEvery(
        types.GROUPS_FETCH_STARTED,
        fetchGroups,
    );
};

// FETCH GROUP
function* fetchGroup(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/groups/${action.payload.id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(actions.completeFetchingGroup(jsonResult));

            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingGroup('Error en la conexión con el servidor.'));
    }
};

export function* watchGroupFetch() {
    yield takeEvery(
        types.GROUP_FETCH_STARTED,
        fetchGroup,
    );
};


// EDIT GROUP
function* editGroup(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/groups/${action.payload.id}/`, {
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
                    actions.completeEditingGroup(
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

export function* watchEditGroup() {
    yield takeEvery(
        types.GROUP_EDIT_STARTED,
        editGroup,
    );
};

// REMOVE GROUP
function* removeGroup(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/groups/${action.payload.courseId}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                yield put(actions.completeRemovingGroup());
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        // yield put(authActions.failLogin('Error en la conexión'));
    }
};

export function* watchRemoveGroup() {
    yield takeEvery(
        types.GROUP_REMOVE_STARTED,
        removeGroup,
    );
};

// FETCH COURSE GROUPS
function* fetchCourseGroups(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/${action.payload}/groups/`, {
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
                    entities: { groups },
                    result,
                } = normalize(jsonResult, schemas.groups);

                yield put(actions.completeFetchingCourseGroups(groups, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingCourseGroups('Error en la conexión con el servidor.'));
    }
};

export function* watchCourseGroupsFetch() {
    yield takeEvery(
        types.COURSE_GROUPS_FETCH_STARTED,
        fetchCourseGroups,
    );
};

// ADD COURSE GROUP
function* addCourseGroup(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/groups/`, {
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
                    actions.completeAddingCourseGroup(
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

export function* watchAddCourseGroup() {
    yield takeEvery(
        types.COURSE_GROUP_ADD_STARTED,
        addCourseGroup,
    );
};