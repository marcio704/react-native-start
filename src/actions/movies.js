import { ALL_MOVIES, FILTER_BY_TITLE, REQUEST_HAS_ERRORED, REQUEST_IS_LOADING, REQUEST_FETCH_DATA_SUCCESS, GET_NEXT_MOVIES_PAGE_FROM_API } from './types';
import { MOVIES_API_URL } from 'movies/src/settings';

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
        text_filter: text,
    }
};

export const getNextMoviesPage = (dispatch) => {
    return {
        type: GET_NEXT_MOVIES_PAGE_FROM_API,
        dispatcher: dispatch
    };
}

// Thunks:
export function fetchNextMoviesPageFromAPI() {
    return (dispatch) => {
        dispatch(getNextMoviesPage(dispatch));
    };
};

export function filterMoviesByText(text) {
    return (dispatch) => {
        dispatch(requestIsLoading(true));
        dispatch(filterMovies(text));
        dispatch(requestIsLoading(false));
    };
};
