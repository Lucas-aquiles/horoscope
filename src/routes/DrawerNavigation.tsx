import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from '../presentation/screens/HomeScreen';
import SettingScreen from '../presentation/screens/SettingScreen';
import NavigationScreen from './NavigationScreen';
import {Text, View, useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

const NavigationDrawer = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        //drawerType:"slide",empuja la pantalla
        //drawerType: "permanent", siempre se muestra el menu
        drawerType: dimensions.width >= 758 ? 'permanent' : 'slide',
        drawerActiveBackgroundColor: 'red',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'green',
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      <Drawer.Screen name="Principal" component={NavigationScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
      <Text>Hola Mundo</Text>
    </DrawerContentScrollView>
  );
};
