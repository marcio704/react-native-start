import { NavigationActions } from 'react-navigation';

import { AppNavigator } from 'AwesomeProject/src/navigators/index.js';

// Start with two routes: The Main screen, with the Login screen on top.
const initialState = AppNavigator.router.getStateForAction(NavigationActions.reset({
	index: 0,
	actions: [
	  NavigationActions.navigate({
		routeName: 'Main',
	  }),
	],
}))
const loginAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavigationState = AppNavigator.router.getStateForAction(loginAction, initialState);

export default function loginReducer(state = initialNavigationState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case 'Logout':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

