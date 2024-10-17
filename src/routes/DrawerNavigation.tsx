import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import SettingScreen from '../presentation/screens/SettingScreen';
import NavigationScreen from './NavigationScreen';
import {View, useWindowDimensions} from 'react-native';
import {colors} from '../config/theme/app-theme';

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
        drawerActiveBackgroundColor: colors.textSecondary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: colors.textSecondary,
        drawerLabelStyle: {
          fontSize: 21,
          marginHorizontal: 'auto',
        },
        drawerItemStyle: {
          borderRadius: 50,
          paddingLeft: dimensions.width * 0.06,
          marginHorizontal: 'auto',
          width: dimensions.width * 0.5,
        },
      }}>
      <Drawer.Screen name="Horoscopos" component={NavigationScreen} />
      <Drawer.Screen name="Config" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default NavigationDrawer;

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={{backgroundColor: colors.primary}}>
      <View style={{marginVertical: 50}} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
