import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import Router from './Router';
import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
        <Provider store={createStore(reducers,{}, compose(applyMiddleware(thunk)))}>
          <StatusBar backgroundColor="#ef394f" barStyle="dark-light"/>
          <Router/>
        </Provider>
    );
  }
}

export default App;
