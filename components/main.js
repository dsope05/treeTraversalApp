import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import {Link} from 'react-router-native';
import {Container, Content, Left, Right, Text, Header, Icon, Body, Button, Card, CardItem} from 'native-base';

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
})

const mainComponent = ({clearIndexArray, onClick, treeDisplayArr, history}) => {
  const displayArr = [];
  treeDisplayArr.forEach((tree, i)=> {
    displayArr.push(
        <TouchableOpacity key={i} onPress={
          ()=> {
            onClick(tree)
            history.push('/intree');
          }}>
          <Card>
            <CardItem>
          <Text> {treeDisplayArr[i].dis}</Text>
        </CardItem>
        </Card>
        </TouchableOpacity>
    )
  });
  return (
    <Container>
      <Header>
        <Body>
          <Button transparent>
            <Text> Main Page </Text>
          </Button>
        </Body>
      </Header>
      <Content>
      {displayArr}
    </Content>
  </Container>
  )
}


export default mainComponent 
