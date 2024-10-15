import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../presentation/screens/HomeScreen';
import SettingScreen from '../presentation/screens/SettingScreen';
import SelectsHoroscope from '../presentation/screens/SelectsHoroscope';
import HamburguerMenu from '../presentation/components/HamburguerMenu';
import DescriptionSign from '../presentation/screens/DescriptionSign';
import {RootStackParamList} from '../NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {elevation: 0, shadowColor: 'transparent'},
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
