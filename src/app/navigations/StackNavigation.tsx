import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeTabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
