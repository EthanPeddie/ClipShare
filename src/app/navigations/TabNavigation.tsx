import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/Home/HomeScreen';
import AddScreen from '../screens/Add/AddScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import colors from '../config/colors';

interface Props {
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
};

const tabIcons = {
  Home: ({color, size}: Props) => (
    <Ionicons name="home" size={size} color={color} />
  ),
  Search: ({color, size}: Props) => (
    <Ionicons name="search" size={size} color={color} />
  ),
  Add: ({color, size}: Props) => (
    <Ionicons name="add" size={size} color={color} />
  ),
  Profile: ({color, size}: Props) => (
    <Ionicons name="person" size={size} color={color} />
  ),
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => tabIcons.Home({color, size}),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => tabIcons.Search({color, size}),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({color, size}) => tabIcons.Add({color, size}),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => tabIcons.Profile({color, size}),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
