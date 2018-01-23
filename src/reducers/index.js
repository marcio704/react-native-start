import { combineReducers } from 'redux';
import {reducer as fetchReducer} from 'react-redux-fetch';

import loginReducer from './login';
import authReducer from './auth';
import moviesReducer from './movies';

const AppReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    movies: moviesReducer,
    repository: fetchReducer,
});

export default AppReducer;