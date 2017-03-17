// npm install --save redux
// npm install --save react-redux
// npm install --save redux-logger
// npm install --save immutable
// npm install --save redux-immutable
// npm install --save react-native-android-permissions
// npm install --save react-native-elements
// npm install --save react-native-vector-icons
// npm install --save react-native-router-flux

'use strict';

import React, { Component } from 'react';
import { View, AppRegistry } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'; // The provider make the store available
// to all container components in the application without passing it explicitely

import createLogger from 'redux-logger';

import RootComponent from './app/root/RootComponent';

import reducer from './app/root/Reducer';
// reducer is a reducing function that returns the next state tree, given the
// current state tree and the action to handle

import { Iterable } from 'immutable'; // immutable for State

// In order to convert state to an easy-to-read plain JavaScript object hierarchy for the redux logger:
const stateTransformer = (state) => {
  if (Iterable.isIterable(state)) {
    return state.toJS()
  } else {
    return state;
  }
};

const logger = createLogger({ stateTransformer }); // logger middleware
const store = createStore(reducer, applyMiddleware(logger)) // from Redux: the store hold the whole state tree
// of the application, reducer is a reducer which regroup all the other ones

class Pandora extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <RootComponent/>
        </View>
      </Provider>
  );
}
}

AppRegistry.registerComponent('Pandora', () => Pandora);
