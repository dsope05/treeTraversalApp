import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {Link} from 'react-router-native';
import {Container, Content, CardItem, Left, Right, Header, Icon, Body, Button, Card} from 'native-base';

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
})

const treeComponent = ({clearIndexArray, onClick, childrenArrLastElem, goBack, history, childArrLength}) => {
  console.log('hist', history);
  console.log('childlll', childArrLength);
  const displayArr = [];
  console.log('childrenarraylastelem', childrenArrLastElem);
  childrenArrLastElem.forEach((elem, i)=> {
    if (childrenArrLastElem[i].dis) {
    displayArr.push(
      <TouchableOpacity key= {i} onPress={()=> onClick(elem)}>
      <Card>
        <CardItem>
      <Text> {childrenArrLastElem[i].dis}</Text>
  </CardItem>
      </Card>
    </TouchableOpacity>
    )}
    if (childrenArrLastElem[i].id) {
      if (childrenArrLastElem[i].children) {
      displayArr.push(
        <TouchableOpacity key= {i} onPress={()=> onClick(elem)}>
        <Card>
          <CardItem>
        <Text> {childrenArrLastElem[i].id}</Text>
    </CardItem>
  </Card>
      </TouchableOpacity>
      )
      } else {
        displayArr.push(
          <Card key={i}>
            <CardItem>
          <Text> {childrenArrLastElem[i].id}</Text>
        </CardItem>
      </Card>
      )
      }
    }
    });

  return (
    <Container>
      <Header>
        <Left>
          <Button onPress= {()=> {
            console.log('yah', history);
            goBack(childArrLength, history);
          }}transparent>
            <Icon name='arrow-back'/>
          </Button>
        </Left>
        <Body>
            <Button transparent>
          <Link
            to="/"
            style={styles.navItem} 
            onPress= {clearIndexArray}
          >
            <Icon name="menu"/>
          </Link>
          </Button>
        </Body>
          <Right>
          </Right>
      </Header>
      <Content>
        {displayArr}
      </Content>
  </Container>
      )
      }


      export default treeComponent 
