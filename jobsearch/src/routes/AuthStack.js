/* eslint-disable prettier/prettier */
import React from 'react';

import Signup from '../screens/Signup';
import Login from '../screens/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
        screenOptions={
            {
                headerTitleAlign: 'center',
                headerBackTitleVisible: false,
            }
        }
    >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

