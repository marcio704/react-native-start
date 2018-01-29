import Reactotron from 'reactotron-react-native';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from 'movies/src/navigator';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default function navigatorReducer(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'Login':
      Reactotron.log(state.login);
      Reactotron.log(state.password);
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main'}),
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

