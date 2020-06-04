import { combineReducers } from 'redux';
import omit from 'lodash/omit';
import union from 'lodash/union';

import * as types from '../types/establishments';


const current = (state = null, action) => {
    switch (action.type) {
        case types.ESTABLISHMENT_FETCH_FAILED:
        case types.ESTABLISHMENT_FETCH_STARTED:
            return null;

        case types.ESTABLISHMENT_FETCH_COMPLETED:
            {
                return action.payload;
            }

        default:
            return state;
    }
};


const isFetching = (state = false, action) => {
    switch (action.type) {
        case types.ESTABLISHMENT_FETCH_STARTED:
            {
                console.log("IS FETCHING STABLISHMENT");

                return true;
            }

        case types.ESTABLISHMENT_FETCH_COMPLETED:
        case types.ESTABLISHMENT_FETCH_FAILED:
            {
                return false;
            }

        default:
            {
                return state;
            }
    };
};

const error = (state = null, action) => {
    switch (action.type) {
        case types.ESTABLISHMENT_FETCH_STARTED:
        case types.ESTABLISHMENT_FETCH_COMPLETED:
            {
                return null;
            }
        case types.ESTABLISHMENT_FETCH_FAILED:
            {
                return action.payload.error;
            }

        default:
            {
                return state;
            }
    };
};

const establishments = combineReducers({
    current,
    isFetching,
    error,
});

export default establishments;

export const getIsFetchingEstablishments = state => state.isFetching;
export const getCurrentEstablishment = state => state.current;
export const getEstablishmentsError = state => state.error;