import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, View, FlatList, StyleSheet} from 'react-native';
import Card from '../components/Card'; // Asegúrate de importar tu componente Card
import {colors} from '../../config/theme/app-theme';

const SelectsHoroscope = () => {
  const navigation = useNavigation();

  // Definimos el array de signos y sus imágenes
  const horoscopes = [
    {
      name: 'Aries',
      image: require('../../assets/image/webp/01-Aries.webp'),
    },
    {
      name: 'Cancer',
      image: require('../../assets/image/webp/02-Cancer.webp'),
    },
    {
      name: 'Geminis',
      image: require('../../assets/image/webp/03-Geminis.webp'),
    },
    {
      name: 'Tauro',
      image: require('../../assets/image/webp/04-Tauro.webp'),
    },
    {
      name: 'Acuario',
      image: require('../../assets/image/webp/05-Acuario.webp'),
    },
    {
      name: 'Capricornio',
      image: require('../../assets/image/webp/06-Capricornio.webp'),
    },
    {
      name: 'Escorpio',
      image: require('../../assets/image/webp/07-Escorpio.webp'),
    },
    {
      name: 'Leo',
      image: require('../../assets/image/webp/08-Leo.webp'),
    },
    {
      name: 'Libra',
      image: require('../../assets/image/webp/09-Libra.webp'),
    },
    {
      name: 'Sagitario',
      image: require('../../assets/image/webp/10-Sagitario.webp'),
    },
    {
      name: 'Virgo',
      image: require('../../assets/image/webp/11-Virgo.webp'),
    },
    {
      name: 'Picis',
      image: require('../../assets/image/webp/12-Picis.webp'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select Horoscope</Text>

      <FlatList
        data={horoscopes}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <Card url={item.image} name={item.name} /> // Renderizamos el componente Card con la imagen correspondiente
        )}
        contentContainerStyle={styles.list}
        numColumns={2} // Mostramos dos columnas de cartas
      />

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home' as never)}>
        <Text style={styles.buttonText}>Ir a home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.primary,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SelectsHoroscope;
