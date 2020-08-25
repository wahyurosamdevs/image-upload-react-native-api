import React, {useEffect} from 'react';
import { Text , SafeAreaView, BackHandler, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from '../routes/router';
import UploadScreen from '../views/Upload'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'native-base';
import RNExitApp from 'react-native-exit-app';
const Drawer = createDrawerNavigator();

function Feed() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
        </SafeAreaView>
    );
}

function Article() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
        </SafeAreaView>
    );
}
function Exit() {
  return (
    BackHandler.exitApp() 
  );
};

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
          options={{ drawerLabel: 'Home', drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />)}} 
          name="Route" component={Routes} 
      />
      <Drawer.Screen 
          options={{ drawerLabel: 'Feed', drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-box"
                color={color}
                size={size}
              />)}} 
          name="Feed" component={Feed} />
      <Drawer.Screen 
          options={{ drawerLabel: 'Article', drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={size}
              />)}} 
          name="Article" component={Article} />
      <Drawer.Screen 
          options={{ drawerLabel: 'Upload', drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-open"
                color={color}
                size={size}
              />)}} 
          name="Upload" component={UploadScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;