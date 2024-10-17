import {useNavigation, NavigationProp} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {RootStackParamList} from '../../NavigationTypes';

const {width, height} = Dimensions.get('window');

const Card = ({url, name}: {url: any; name: string}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const nameLower = name.toLowerCase();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate('Description', {horoscopeName: nameLower})
      }>
      <Image source={url} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    elevation: 5,
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
