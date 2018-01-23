import { ALL_MOVIES, REQUEST_ERROR } from './types';
import axios from 'axios';

import { MOVIES_API_URL } from 'AwesomeProject/src/settings';

/*

import Reactotron from 'reactotron-react-native';
import { ALL_MOVIES, REQUEST_ERROR } from './types';
import axios from 'axios';

import { MOVIES_API_URL } from 'AwesomeProject/src/settings';

export const fetchMoviesFromAPI = () => {
    const response = axios.get(MOVIES_API_URL);
    
    Reactotron.log(response);
    Reactotron.log('Response from movies API:');

    return {
        type: ALL_MOVIES,
        payload: response,
        isLoading: false,
    }
};

*/