import React from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../NavigationTypes';
import useFetchHoroscope from '../hook/CustomHook';

const DescriptionSign = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Description'>>();
  const {horoscopeName} = route.params; // Obtén el nombre del horóscopo
  const navigation = useNavigation();
  const {state, loading, error} = useFetchHoroscope(); 

  if (loading) {
    return <Text>Loading...</Text>; 

  if (error) {
    return <Text>{error}</Text>; 

  if (!state[0] || !state[0][horoscopeName]) {
    return <Text>Horoscope not found</Text>; 
  }

  return (
    <View>
      <Text>{horoscopeName}</Text>
      <Text>{state[0][horoscopeName]}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home' as never)}
      />
    </View>
  );
};

export default DescriptionSign;
