import { combineReducers } from 'redux';

import authReducer from './auth';
import loginReducer from './login';
import moviesReducer from './movies';
import navigatorReducer from './navigator';
import storageReducer from './storage';

const AppReducer = combineReducers({
    login: loginReducer,
    movies: moviesReducer,
    nav: navigatorReducer,
    appStorage: storageReducer,
});

export default AppReducer;
