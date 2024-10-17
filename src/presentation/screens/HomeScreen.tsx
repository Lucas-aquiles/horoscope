import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import HamburguerMenu from '../components/HamburguerMenu';
import {colors} from '../../config/theme/app-theme';

const HomeScreen = () => {
  const {width, height} = Dimensions.get('window');
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga de la imagen

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: height * 1,
        flex: 1,
        backgroundColor: '#EBE0D7',
      }}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#EBE0D7" />

      <HamburguerMenu />

      <View style={{position: 'relative'}}>
        {/* Indicador de carga mientras se carga la imagen */}
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={colors.textSecondary}
            style={{
              position: 'absolute',
              top: height / 2 - 20, // Centrando el indicador
              left: width / 2 - 20,
            }}
          />
        )}

        <Image
          source={require('../../assets/image/planetas.webp')}
          style={{
            width: '100%',
            height: height * 1,
          }}
          onLoadEnd={() => setIsLoading(false)} // Cambia el estado cuando la imagen termina de cargar
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
