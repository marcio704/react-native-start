import 'AwesomeProject/src/ReactotronConfig';
import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import AppReducer from 'AwesomeProject/src/reducers/movies.js';
import AppWithNavigationState from 'AwesomeProject/src/navigators/index.js';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  // return createStore(AppReducer, initialState, enhancer);
  return Reactotron.createStore(AppReducer, enhancer)
}

class App extends React.Component {
  store = configureStore({});

  render() {
    Reactotron.log('hello rendering world'); // Also possible Reactotron.warn, Reactotron.error, Reactotron.display

    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
