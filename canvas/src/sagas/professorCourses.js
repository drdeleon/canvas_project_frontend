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
import * as actions from '../actions/professorCourses';
import * as types from '../types/professorCourses';
import * as schemas from '../schemas/courses';


function* fetchProfessorCourses(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const user = yield select(selectors.getLoggedUser);
            console.log(user)

            const response = yield call(
                fetch,
                `${API_BASE_URL}/professors/${user.professor}/courses/`, {
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

                yield put(
                    actions.completeFetchingProfessorCourses(
                        courses,
                        result,
                    ),
                );
            } else {
                // const { non_field_errors } = yield response.json();
                // yield put(actions.failLogin(non_field_errors[0]));
            }
        }
    } catch (error) {
        yield put(actions.failFetchingProfessorCourses('Error en la conexión con el servidor.'));
        console.log("ERROR", error)
    }
};

export function* watchprofessorCoursesFetch() {
    yield takeEvery(
        types.STUDENT_COURSES_FETCH_STARTED,
        fetchProfessorCourses,
    );
};

// function* addProfessorCourse(action) {
//     try {
//         const isAuth = yield select(selectors.isAuthenticated);

//         if (isAuth) {
//             const token = yield select(selectors.getAuthToken);
//             const response = yield call(
//                 fetch,
//                 `${API_BASE_URL}/owners/`, {
//                     method: 'POST',
//                     body: JSON.stringify(action.payload),
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `JWT ${token}`,
//                     },
//                 }
//             );

//             if (response.status === 201) {
//                 const jsonResult = yield response.json();
//                 yield put(
//                     actions.completeAddingProfessorCourse(
//                         action.payload.id,
//                         jsonResult,
//                     ),
//                 );
//                 // const {
//                 //   entities: { professorCourses },
//                 //   result,
//                 // } = normalize(jsonResult, schemas.professorCourses);

//                 // yield put(
//                 //   actions.completeFetchingprofessorCourses(
//                 //     professorCourses,
//                 //     result,
//                 //   ),
//                 // );
//             } else {
//                 // const { non_field_errors } = yield response.json();
//                 // yield put(actions.failLogin(non_field_errors[0]));
//             }
//         }
//     } catch (error) {
//         // yield put(actions.failLogin('Falló horrible la conexión mano'));
//         console.log("ERROR", error)
//     }
// };

// export function* watchAddProfessorCourse() {
//     yield takeEvery(
//         types.STUDENT_COURSE_ADD_STARTED,
//         addProfessorCourse,
//     );
// };

// function* removeProfessorCourse(action) {
//     try {
//         const isAuth = yield select(selectors.isAuthenticated);

//         if (isAuth) {
//             const token = yield select(selectors.getAuthToken);
//             const response = yield call(
//                 fetch,
//                 `${API_BASE_URL}/owners/${action.payload.id}/`, {
//                     method: 'DELETE',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `JWT ${token}`,
//                     },
//                 }
//             );

//             if (response.status === 200) {
//                 yield put(actions.completeRemovingProfessorCourse());
//                 // const {
//                 //   entities: { professorCourses },
//                 //   result,
//                 // } = normalize(jsonResult, schemas.professorCourses);

//                 // yield put(
//                 //   actions.completeFetchingprofessorCourses(
//                 //     professorCourses,
//                 //     result,
//                 //   ),
//                 // );
//             } else {
//                 // const { non_field_errors } = yield response.json();
//                 // yield put(actions.failLogin(non_field_errors[0]));
//             }
//         }
//     } catch (error) {
//         // yield put(actions.failLogin('Falló horrible la conexión mano'));
//         console.log("ERROR", error)
//     }
// };

// export function* watchRemoveProfessorCourse() {
//     yield takeEvery(
//         types.STUDENT_COURSE_REMOVE_STARTED,
//         removeProfessorCourse,
//     );
// };