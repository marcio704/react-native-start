import Reactotron from 'reactotron-react-native';

import { ALL_MOVIES, FILTER_BY_TITLE, REQUEST_HAS_ERRORED, REQUEST_IS_LOADING, REQUEST_FETCH_DATA_SUCCESS } from './types';
import { MOVIES_API_URL } from 'AwesomeProject/src/settings';

// Action creators:
export function requestIsLoading(bool) {
    return {
        type: REQUEST_IS_LOADING,
        isLoading: bool
    };
}

export function requestFetchDataSuccess(items) {
    return {
        type: REQUEST_FETCH_DATA_SUCCESS,
        items
    };
}

export function requestHasErrored(bool) {
    return {
        type: REQUEST_HAS_ERRORED,
        hasErrored: bool
    };
}

export const filterMovies = (text) => {

    return {
        type: FILTER_BY_TITLE,
        title_filter: text,
    }
};

// Thunks:
export function fetchMoviesFromAPI() {
    return (dispatch) => {
        dispatch(requestIsLoading(true));
        fetch(MOVIES_API_URL)
            .then((response) => {
                dispatch(requestIsLoading(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(requestFetchDataSuccess(items)))
            .catch(() => dispatch(requestHasErrored(true)));
    };
};


export function filterMoviesByTitle(text) {
    return (dispatch) => {
        dispatch(requestIsLoading(true));
        dispatch(filterMovies(text.text));
        dispatch(requestIsLoading(false));
    };
};
