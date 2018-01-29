import Reactotron from 'reactotron-react-native';

import { CHANGE_LOGIN_TEXT, CHANGE_PASSWORD_TEXT } from './types';

// Action creators:
export function setLoginText(text) {
    return {
        type: CHANGE_LOGIN_TEXT,
        login: text
    };
}

export function setPasswordText(text) {
    return {
        type: CHANGE_PASSWORD_TEXT,
        password: text
    };
}


// Thunks:
export function setLogin(text) {
    return (dispatch) => {
        dispatch(setLoginText(text));
    };
};

export function setPassword(text) {
    return (dispatch) => {
        dispatch(setPasswordText(text));
    };
};
