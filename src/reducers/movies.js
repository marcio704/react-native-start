import { ALL_MOVIES, REQUEST_ERROR } from 'AwesomeProject/src/actions/types';  
import { MOVIES_API_URL } from 'AwesomeProject/src/settings';

export default function moviesReducer(state=[], action) {
    switch (action.type) {
        case ALL_MOVIES:
            return {
                ...state,
                all: action.payload,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
}
