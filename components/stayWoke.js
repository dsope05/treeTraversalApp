import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import videoPageComponent from './videoComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9967a',
    padding: 10
    
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
      <View style={styles.container}>
        <View style={styles.nav}>
        <Link
          to="/stay"
          style={styles.navItem} 
        >
          <Text> MainPage </Text>
        </Link>
        <Link
          to="/woke"
          style={styles.navItem} 
        >
          <Text> Woke </Text>
        </Link>
        <Link
          to="/"
          style={styles.navItem} 
        >
          <Text> Settings </Text>
        </Link>
      </View>
        <Route exact path="/" component={mainComponent}/>
        <Route path="/stay" component={mainComponent}/>
        <Route path="/woke" component={videoPageComponent}/>
      </View>
    </NativeRouter>
  );
}
const mainComponent = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.wokeText}> Maricris and Daniel Present </Text>
      <Text style= {styles.wokeText, styles.largeText} > Stay Woke </Text>
      <Text style = {styles.wokeText}> (with React and Redux) </Text>
    </View>
  )
}


export default stayWoke
