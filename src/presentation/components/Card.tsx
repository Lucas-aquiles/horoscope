import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../NavigationTypes'; // Asegúrate de importar el tipo

const Card = ({url, name}: {url: any; name: string}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Especifica el tipo aquí

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Description', {horoscopeName: name})}>
      <Image source={url} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#f0f0f0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default Card;
