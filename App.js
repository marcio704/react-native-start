import 'movies/src/ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppReducer from 'movies/src/reducers';
import AppWithNavigationState from 'movies/src/navigator';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return Reactotron.createStore(AppReducer, enhancer)
}

class App extends Component {
  store = configureStore({});

  render() {
    Reactotron.log('Starting app...'); // Also possible Reactotron.warn, Reactotron.error, Reactotron.display

    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
