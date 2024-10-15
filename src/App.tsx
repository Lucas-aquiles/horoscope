import '../gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './presentation/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from './presentation/screens/SettingScreen';
import NavigationScreen from './routes/NavigationScreen';
import NavigationDrawer from './routes/DrawerNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}

export default App;
