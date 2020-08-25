import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './src/drawers/Drawer';
import { StatusBar } from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar />
    </NavigationContainer>
  );
}

export default App;
