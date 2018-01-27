import { combineReducers } from 'redux';

import authReducer from './auth';
import moviesReducer from './movies';
import navigatorReducer from './navigator';

const AppReducer = combineReducers({
    movies: moviesReducer,
    nav: navigatorReducer
});

export default AppReducer;
