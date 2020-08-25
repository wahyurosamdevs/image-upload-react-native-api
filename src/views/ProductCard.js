import {  StyleSheet, Image, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {  Content, Card, CardItem, Text, Button, Body } from 'native-base';

const windowWidth = Dimensions.get('window').width - 5;

export default function ProductCard (props) {
    const navigation = useNavigation();
    return (
        <Content >
            {
              props.data.map((data, index) => {
                return <Card style={{ width: windowWidth }} key={data.id}>
                          <CardItem cardBody >
                            <Image source={{uri: 'http://192.168.1.12:8000/image/'+data.image}} style={{height: 200, width: null, flex: 1}}/>
                          </CardItem>
                          <CardItem >
                            <Body>
                                <Text style={{  }}>{data.name}</Text>
                            </Body>
                          </CardItem>
                            <Button onPress={() => {navigation.navigate('Detail',{Id:data.id,Name : data.name, Image : 'http://192.168.1.12:8000/image/'+data.image, Detail : data.detail, Upload : data.created_at })}} style={{ width: windowWidth, justifyContent: 'center' }}>
                              <Text style={{ textAlign: 'center' }}>Detail</Text>
                            </Button>
                        </Card>
                })
            }
        </Content>
      
  );
}
const style = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  card: {
      width: '45%',
      height: '20%',
      margin: '2.5%', 
  },
  text12: {
    color : 'blue',
    fontStyle : 'italic',
  }
})