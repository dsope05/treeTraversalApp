import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import videoPageComponent from './videoComponent';
import MainContainer from '../containers/mainContainer';
import TreeContainer from '../containers/treeContainer';
import {Container} from 'native-base';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9967a',
  },
  wokeText: {
    fontFamily: 'Courier',
    padding: 20
  },
  largeText: {
    fontSize: 40, 
  },
  navItem: {
    alignItems: 'center',
    flex: 1
  },
  nav: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const stayWoke = () => {
  return (
    <NativeRouter>
      <Container> 
        <Route exact path="/" component={MainContainer}/>
        <Route path="/intree" component={TreeContainer}/>
      </Container>
    </NativeRouter>
  );
}

export default stayWoke
