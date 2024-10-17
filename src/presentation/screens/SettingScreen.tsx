import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, View, Linking} from 'react-native';
import {colors} from '../../config/theme/app-theme';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('window');

const SettingScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    Linking.openURL('https://rootsoftware.com.ar/privacypolicy/horoscope');
  };

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <View
        style={{
          width: width * 0.8,
          height: height * 0.8,
          marginHorizontal: 'auto',
          marginVertical: 'auto',
          display: 'flex',
        }}>
        <Button
          style={{marginVertical: 20}}
          mode="contained"
          onPress={handlePress}>
          Políticas de Privacidad
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home' as never)}>
          Regresar a Home
        </Button>
      </View>
    </View>
  );
};

export default SettingScreen;
