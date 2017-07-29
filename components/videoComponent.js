import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    flex:1,
    alignItems: 'center',
    padding: 10
  }
})

const videoPageComponent = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.wokeText}> Videos</Text>
    </View>
  );
}
export default videoPageComponent 
