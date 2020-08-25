import {   StyleSheet,ActivityIndicator } from 'react-native';
import React, { useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ProductCard from "./ProductCard";
import * as Font from 'expo-font';
export default function HomeScreen (){

  const [isLoading, setLoading] = useState(true);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.12:8000/api/v1/Document')
      .then((response) => response.json())
      .then((json) => setdata(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
      (async () => await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      }))();
  }, []);
  return (
    <ScrollView style={style.container}>
      { isLoading ? <ActivityIndicator/> : (
        <ProductCard key={data.id} data={data} />
      )}
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
        width: '45%',
        height: '20%',
        margin: '2.5%', 
    },
    text12: {
      color : 'blue',
      fontStyle : 'italic',
    }
})
