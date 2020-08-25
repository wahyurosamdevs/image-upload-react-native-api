import {  ActivityIndicator,StyleSheet,View } from 'react-native';
import React, {useEffect, useState} from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Coba (props) {
    console.table(props.data);
    const navigation = useNavigation();
    return (
        <View style={style.container} >
            <Text>bisa</Text>
        </View>
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