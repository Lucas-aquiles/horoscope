import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
  StatusBar,
} from 'react-native';
import {Text} from 'react-native-paper';
import {Button} from 'react-native-paper';

import {useNavigation} from '@react-navigation/native';
import HamburguerMenu from '../components/HamburguerMenu';
import {colors} from '../../config/theme/app-theme';

const HomeScreen = () => {
  const {width, height} = Dimensions.get('window');

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: height * 1,
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />

      <HamburguerMenu />

      <View style={{position: 'relative'}}>
        <Image
          source={require('../../assets/image/planetas.webp')}
          style={{
            width: '100%',
            height: height * 1,
          }}
        />
      </View>

      <Text
        variant="displayMedium"
        style={{
          color: colors.textSecondary,
          position: 'absolute',
          bottom: height * 0.25,
          fontWeight: '900',
          textAlign: 'center',
          alignSelf: 'center',
          width: width * 0.8,
        }}>
        Horoscopo Semanal
      </Text>

      <Button
        style={{
          position: 'absolute',
          bottom: height * 0.1,
          alignSelf: 'center',
          backgroundColor: colors.textSecondary,
        }}
        labelStyle={{fontSize: 20}}
        mode="contained"
        onPress={() => navigation.navigate('Select' as never)}>
        Elige tu signo
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
