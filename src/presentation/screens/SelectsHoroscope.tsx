import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, FlatList, StyleSheet, Dimensions} from 'react-native';
import Card from '../components/Card';
import {colors} from '../../config/theme/app-theme';
import {Button} from 'react-native-paper';

const {width, height} = Dimensions.get('window');
const SelectsHoroscope = () => {
  const navigation = useNavigation();

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
      name: 'Piscis',
      image: require('../../assets/image/webp/12-Picis.webp'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Elige tu signo</Text>

      <FlatList
        data={horoscopes}
        keyExtractor={item => item.name}
        renderItem={({item}) => <Card url={item.image} name={item.name} />}
        contentContainerStyle={styles.list}
        numColumns={2}
      />

      <Button
        style={styles.button}
        labelStyle={{fontSize: 20}}
        mode="contained"
        onPress={() => navigation.navigate('Home' as never)}>
        Regresar
      </Button>
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
    marginBottom: 10,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  list: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: height * 0.05,
  },
  button: {
    marginTop: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SelectsHoroscope;
