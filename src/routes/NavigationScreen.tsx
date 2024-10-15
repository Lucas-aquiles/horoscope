import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../presentation/screens/HomeScreen';
import SettingScreen from '../presentation/screens/SettingScreen';
import SelectsHoroscope from '../presentation/screens/SelectsHoroscope';

const Stack = createNativeStackNavigator();
// const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Select" component={SelectsHoroscope} />
    </Stack.Navigator>
  );
};

export default NavigationScreen;
