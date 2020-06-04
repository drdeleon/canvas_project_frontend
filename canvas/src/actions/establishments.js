import * as types from '../types/establishments';

// FETCHING ESTABLISHMENT
export const startFetchingEstablishment = id => ({
    type: types.ESTABLISHMENT_FETCH_STARTED,
    payload: {
        id,
    },
});

export const completeFetchingEstablishment = Establishment => ({
    type: types.ESTABLISHMENT_FETCH_COMPLETED,
    payload: Establishment,
});

export const failFetchingEstablishment = error => ({
    type: types.ESTABLISHMENT_FETCH_FAILED,
    payload: {
        error,
    },
});