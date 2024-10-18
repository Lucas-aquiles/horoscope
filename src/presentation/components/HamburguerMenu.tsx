import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable, View} from 'react-native';
import IonIcon from './IonIcon';
import {colors} from '../../config/theme/app-theme';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={{position: 'absolute', backgroundColor: colors.primary}}>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
        <IonIcon name={'menu-outline'} size={50} color={colors.textSecondary} />
      </Pressable>
    </View>
  );
};

export default HamburguerMenu;
