import { FILTER_BY_TITLE, REQUEST_HAS_ERRORED, REQUEST_IS_LOADING, REQUEST_FETCH_DATA_SUCCESS } from 'AwesomeProject/src/actions/types';  

initialState = {
    isLoading: true,
    items: [],
    hasErrored: false,
    title_filter: "",
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
            if (!action.title_filter) {
                return {
                    ...state,
                    items: state.all_items,
                };
            }
            const movies = state.all_items.reduce(function (res, movie) {
                if (movie.title.indexOf(action.title_filter) >= 0) {
                    res.push(movie);
                }
                return res;
            }, []);

            return {
                ...state,
                items: movies,
            }

        default:
            return state;
    }
}
