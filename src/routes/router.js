import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../views/Home';
import DetailsScreen from '../views/Details';
import Coba from '../views/coba';
const Stack = createStackNavigator();

function Routes() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Coba" component={Coba} />
      </Stack.Navigator>
    );
}

export default Routes;