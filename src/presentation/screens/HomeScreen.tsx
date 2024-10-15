import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HamburguerMenu from '../components/HamburguerMenu';

const HomeScreen = () => {
  const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <HamburguerMenu />

      <View style={{position: 'relative'}}>
        <Image
          source={require('../../assets/image/planetas.webp')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <Pressable
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          right: '50%',
          bottom: 100,
        }}
        onPress={() => navigation.navigate('Select' as never)}>
        <Text>ir a select</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default HomeScreen;
