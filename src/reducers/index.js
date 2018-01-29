import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import moviesReducer from './movies';
import navigatorReducer from './navigator';

const AppReducer = combineReducers({
    login: loginReducer,
    movies: moviesReducer,
    nav: navigatorReducer
});

export default AppReducer;
