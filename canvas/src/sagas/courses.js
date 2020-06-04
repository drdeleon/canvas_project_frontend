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
import * as actions from '../actions/courses';
import * as authActions from '../actions/auth';
import * as types from '../types/courses';
import * as schemas from '../schemas/courses';


function* fetchCourses(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const userType = yield select(selectors.getSelectedUserType);
            const user = yield select(selectors.getLoggedUser);

            let url = yield `${API_BASE_URL}/`
            switch (userType) {
                case 0:
                    {
                        url += `students/${user.student}/courses/`
                        break;
                    }
                case 1:
                    {
                        url += `professors/${user.professor}/courses/`
                        break;
                    }
                case 2:
                    {
                        url += `assistants/${user.assistant}/courses/`
                        break;
                    }
                default:
                    url += `students/${user.student}/courses/`
                    break;
            }

            const response = yield call(
                fetch,
                url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                const jsonResult = yield response.json();
                const {
                    entities: { courses },
                    result,
                } = normalize(jsonResult, schemas.courses);


                yield put(actions.completeFetchingCourses(courses, result));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failFetchingCourses('Error en la conexión con el servidor.'));
    }
};

export function* watchCoursesFetch() {
    yield takeEvery(
        types.COURSES_FETCH_STARTED,
        fetchCourses,
    );
};

function* addCourse(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/`, {
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
                    actions.completeAddingCourse(
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

export function* watchAddCourse() {
    yield takeEvery(
        types.COURSE_ADD_STARTED,
        addCourse,
    );
};

function* removeCourse(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/${action.payload.id}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                yield put(actions.completeRemovingCourse());
            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(authActions.failLogin('Error en la conexión'));
    }
};

export function* watchRemoveCourse() {
    yield takeEvery(
        types.COURSE_REMOVE_STARTED,
        removeCourse,
    );
};


// EDIT COURSE
function* editCourse(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
                fetch,
                `${API_BASE_URL}/courses/${action.payload.id}/`, {
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
                    actions.completeEditingCourse(
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

export function* watchEditCourse() {
    yield takeEvery(
        types.COURSE_EDIT_STARTED,
        editCourse,
    );
};