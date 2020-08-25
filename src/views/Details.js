import {  ActivityIndicator,StyleSheet,Image, Dimensions } from 'react-native';
import React, {useEffect, useState} from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default function DetailsScreen (props) {

  const [isLoading, setLoading] = useState(true);
  const windowWidth = Dimensions.get('window').width -5;
  
  return (
      <ScrollView>
        <Container>
          <Content style={{ flex:1 }}>
              <Card style={{ width: windowWidth }}>
                <CardItem cardBody >
                  <Image source={{uri: props.route.params.Image }} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                  <Body>
                      <Text style={style.text12}>Name : {props.route.params.Name}</Text>
                      <Text style={style.text12}>Detail : {props.route.params.Detail}</Text>
                      <Text style={style.text12}>Upload : {props.route.params.Upload}</Text>
                  </Body>
                </CardItem>
              </Card>
          </Content>
        </Container>
      </ScrollView>
    );
}
const style = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  card: {
      width: '95%',
      height: '20%',
      margin: '2.5%', 
  },
  text12: {
    color : 'blue',
    fontSize : 18,
  }
})