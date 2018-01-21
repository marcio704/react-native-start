import { NavigationActions } from 'react-navigation';

import { AppNavigator } from 'AwesomeProject/src/navigators/index.js';

const initialAuthState = { isLoggedIn: false };

export default function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case 'Login':
      return { ...state, isLoggedIn: true };
    case 'Logout':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}