import '../gesture-handler';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import NavigationDrawer from './routes/DrawerNavigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#EBE0D7',
  },
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={MyTheme}>
      <NavigationDrawer />
    </NavigationContainer>
  );
}

export default App;
