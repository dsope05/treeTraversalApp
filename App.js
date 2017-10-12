import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import Woke from './containers/stayWoke';
import wokeApp from './reducers';
import getAppData from './actions/getAppData';

let store = createStore(wokeApp);

getAppData().then((appData)=> {
  appData.type = 'GET_APP_DATA';
  store.dispatch(appData);
}).catch((error)=> console.log(error));

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
