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
import * as actions from '../actions/establishments';
import * as authActions from '../actions/auth';
import * as types from '../types/establishments';
import * as schemas from '../schemas/establishments';


// FETCH ASSIGNMENT
function* fetchEstablishment(action) {
    try {
        const isAuth = yield select(selectors.getIsAuthenticated);

        if (isAuth) {
            console.log("ACAAA");

            const token = yield select(selectors.getAuthToken);

            const response = yield call(
                fetch,
                `${API_BASE_URL}/establishments/${action.payload.id}/`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`,
                    },
                }
            );

            if (response.status >= 200 && response.status <= 299) {
                const jsonResult = yield response.json();
                yield put(actions.completeFetchingEstablishment(jsonResult));

            } else {
                const { non_field_errors } = yield response.json();
                yield put(authActions.failLogin(non_field_errors[0]));
            }
        }

    } catch (error) {
        yield put(actions.failFetchingEstablishment('Error en la conexión con el servidor.'));
    }
};

export function* watchEstablishmentFetch() {
    yield takeEvery(
        types.ESTABLISHMENT_FETCH_STARTED,
        fetchEstablishment,
    );
};