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

      {/* Renderiza la imagen primero */}
      <View style={{position: 'relative', paddingTop: height * 0.08}}>
        <Image
          source={require('../../assets/image/planetas.webp')}
          style={{
            width: '100%',
            height: height * 1,
          }}
          onLoadEnd={() => setIsLoading(false)} // Cambia el estado cuando la imagen termina de cargar
        />
      </View>

      {/* Muestra el ActivityIndicator mientras isLoading sea true */}
      {isLoading && (
        <View
          style={{
            position: 'absolute',
            width: width,
            height: height,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={colors.textSecondary} />
        </View>
      )}

      {!isLoading && (
        <>
          <HamburguerMenu />

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
            Horóscopo Semanal
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
        </>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
