import React from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, Dimensions} from 'react-native';
import {RootStackParamList} from '../../NavigationTypes';
import useFetchHoroscope from '../hook/CustomHook';
import {Button} from 'react-native-paper';
import {colors} from '../../config/theme/app-theme';

const {width, height} = Dimensions.get('window');

const DescriptionSign = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Description'>>();
  const {horoscopeName} = route.params;
  const navigation = useNavigation();
  const {state, loading, error} = useFetchHoroscope();

  if (loading) {
    return (
      <View
        style={{width: width, height: height, backgroundColor: colors.primary}}>
        <Button mode="text" loading style={{marginVertical: 'auto'}}>
          Loading
        </Button>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={{width: width, height: height, backgroundColor: colors.primary}}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!state[0] || !state[0][horoscopeName]) {
    return (
      <View
        style={{width: width, height: height, backgroundColor: colors.primary}}>
        <Text>Horoscope not found</Text>{' '}
      </View>
    );
  }
  function insertarSaltosDeLinea(texto: string) {
    return texto.replace(/\//g, '\n');
  }

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <Text
        style={{
          fontSize: width * 0.08,
          alignItems: 'center',
          textAlign: 'center',
          fontWeight: '600',
        }}>
        {horoscopeName.toLocaleUpperCase()}
      </Text>
      <Text
        style={{
          fontSize: width * 0.05,
          textAlign: 'justify',
          fontWeight: '600',
          width: width * 0.9,
          marginHorizontal: 'auto',
        }}>
        {state && insertarSaltosDeLinea(state[0][horoscopeName])}
      </Text>
      <View
        style={{
          width: width * 0.5,
          marginHorizontal: 'auto',
          position: 'absolute',
          bottom: height * 0.2,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home' as never)}>
          Regresar a Home
        </Button>
      </View>
    </View>
  );
};

export default DescriptionSign;
