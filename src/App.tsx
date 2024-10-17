import '../gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationDrawer from './routes/DrawerNavigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}

export default App;
