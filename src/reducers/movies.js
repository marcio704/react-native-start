import Reactotron from 'reactotron-react-native';
import axios from 'axios';

import { REQUEST_IS_LOADING, REQUEST_FETCH_DATA_SUCCESS, REQUEST_HAS_ERRORED, FILTER_BY_TITLE, GET_NEXT_MOVIES_PAGE_FROM_API  } from 'movies/src/actions/types';  
import { MOVIES_API_URL, MOVIES_API_URL_2, MOVIES_API_URL_3 } from 'movies/src/settings';
import { requestFetchDataSuccess, requestHasErrored, requestIsLoading } from 'movies/src/actions/movies';

initialState = {
    isLoading: true,
    items: [],
    all_items: [],
    hasErrored: false,
    title_filter: "",
    page: 0,
}
export default function moviesReducer(state=initialState, action) {
    switch (action.type) {
        case REQUEST_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case REQUEST_FETCH_DATA_SUCCESS:
            return {
                ...state,
                items: action.items,
                all_items: action.items,
            };
        case REQUEST_HAS_ERRORED:
            return {
                ...state,
                hasErrored: action.hasErrored,
            };
        case FILTER_BY_TITLE:
            if (!action.text_filter) {
                return {
                    ...state,
                    items: state.all_items,
                };
            }
            const movies = state.all_items ? state.all_items.reduce(function (res, movie) {
                if (movie.title.toLowerCase().indexOf(action.text_filter.toLowerCase()) >= 0 || 
                    movie.description.toLowerCase().indexOf(action.text_filter.toLowerCase()) >= 0) {
                    res.push(movie);
                }
                return res;
            }, []) : [];

            return {
                ...state,
                items: movies,
            }
        case GET_NEXT_MOVIES_PAGE_FROM_API:
            const next_page = state.page + 1;
           
            // As mocky.io doesnt accept dynamic body or url parameter for simulating pagination, it was necessary to create differente urls
            url = next_page === 1 ? MOVIES_API_URL : next_page === 2 ?  MOVIES_API_URL_2 : MOVIES_API_URL_3
            axios.get(url)
            .then((response) => {
                if (!response.status === 200) {
                    throw Error(`An error occurred while requesting the API. Status: ${response.statusText}. Body: ${response.text()}`);
                }
                if (next_page === 1) {
                    action.dispatcher(requestIsLoading(false));
                }
                if (response.data) {
                    action.dispatcher(requestFetchDataSuccess(state.all_items.concat(response.data)));
                }
            })
            .catch((error) => {
                Reactotron.error(error);
                action.dispatcher(requestHasErrored(true));
            });

            return {
                ...state,
                page: next_page,
            }
        default:
            return state;
    }
}
