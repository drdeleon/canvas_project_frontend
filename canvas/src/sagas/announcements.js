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
import * as actions from '../actions/announcements';
import * as authActions from '../actions/auth';
import * as types from '../types/announcements';
import * as schemas from '../schemas/announcements';

function* fetchAnnouncements(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/${action.payload}/announcements/`, {
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
                    entities: { announcements },
                    result,
                } = normalize(jsonResult, schemas.announcements);

                yield put(actions.completeFetchingAnnouncements(announcements, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
            yield put(actions.failFetchingAnnouncements('Error en la conexión con el servidor.'));
    }
};

export function* watchFetchAnnouncements() {
    yield takeEvery (
        types.ANNOUNCEMENTS_FETCH_STARTED,
        fetchAnnouncements
    );
};

function* fetchAnnouncement(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/announcements/${action.payload.id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(actions.completeFetchingAnnouncement(jsonResult));

            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingAnnouncement('Error en la conexión con el servidor.'));
    }
};

export function* watchFetchAnnouncement() {
    yield takeEvery(
        types.ANNOUNCEMENT_FETCH_STARTED,
        fetchAnnouncement,
    );
};

function* addAnnouncement(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);
        
        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/${action.payload.courseId}/create-announcement/`, {
                    method: 'POST',
                    body: JSON.stringify(action.payload.announcement),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );
            
            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(
                    actions.completeAddingAnnouncement(
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

export function* watchAddAnnouncement() {
    yield takeEvery (
        types.ANNOUNCEMENT_ADD_STARTED,
        addAnnouncement
    );
};

function* removeAnnouncement (action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/announcements/${action.payload.id}/`, {
                    method: 'DELETE',
                    // body: JSON.stringify(action.payload.id),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );
            console.log(response.json());
            if (response.status >= 200 && response.status <= 299) {
                yield put(actions.completeRemovingAnnouncement());
            } else {
                const { non_field_errors } = yield response.json();
                // yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(authActions.failLogin('Error en la conexión'));
    }
};

export function* watchRemoveAnnouncement() {
    yield takeEvery (
        types.ANNOUNCEMENT_REMOVE_STARTED,
        removeAnnouncement
    );
};
