import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AddScreen from '../screens/Add/AddScreen';
import PreviewScreen from '../screens/Add/PreviewScreen';
import font from '../config/font';
import colors from '../config/colors';

const Stack = createStackNavigator();

const AddScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Add"
        component={AddScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Preview"
        component={PreviewScreen}
        options={{
          headerTitleStyle: {
            fontFamily: font['outfit-bold'],
            color: colors.light,
          },
          headerTitleAlign: 'center',
          headerTintColor: colors.light,
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AddScreenNavigator;
