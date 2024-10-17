import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../presentation/screens/HomeScreen';
import SelectsHoroscope from '../presentation/screens/SelectsHoroscope';
import DescriptionSign from '../presentation/screens/DescriptionSign';
import {RootStackParamList} from '../NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NavigationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Select" component={SelectsHoroscope} />
      <Stack.Screen name="Description" component={DescriptionSign} />
    </Stack.Navigator>
  );
};

export default NavigationScreen;
