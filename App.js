import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Woke from './containers/main';
import wokeApp from './reducers';

let store = createStore(wokeApp);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Woke/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
