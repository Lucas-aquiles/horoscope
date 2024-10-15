import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import IonIcon from './IonIcon';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  return (
    <View style={{position: 'relative', backgroundColor: '#EBE0D7'}}>
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
        <IonIcon name={'menu-outline'} size={50} color={'red'} />
      </Pressable>
    </View>
  );
};

export default HamburguerMenu;
