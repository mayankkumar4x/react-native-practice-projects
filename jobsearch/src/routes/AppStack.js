/* eslint-disable prettier/prettier */
import React from 'react';

import Home from '../screens/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
        screenOptions={
            {
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
            }
        }
    >
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

