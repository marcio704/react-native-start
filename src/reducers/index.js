import { combineReducers } from 'redux';

import loginReducer from './login';
import authReducer from './auth'

const AppReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
});

export default AppReducer;