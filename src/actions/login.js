import Reactotron from 'reactotron-react-native';
import { AccessToken } from 'react-native-fbsdk';

import { CHANGE_LOGIN_TEXT, CHANGE_PASSWORD_TEXT } from './types';
import { deleteStorageItem } from 'movies/src/actions/storage';
import { LOGIN_STATE_KEY } from 'movies/src/settings';

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

export function logout(navigation) {
    return (dispatch) => {
        dispatch(deleteStorageItem(LOGIN_STATE_KEY)); // Remove token from local storage
        AccessToken.setCurrentAccessToken(null); // Set user as unlogged on FBSDK
        
        navigation.dispatch({ type: 'Logout' });
    };
};