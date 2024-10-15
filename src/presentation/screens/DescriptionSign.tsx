import React from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {RootStackParamList} from '../../NavigationTypes'; // Importa tu tipo de navegación

const DescriptionSign = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Description'>>(); // Especifica el tipo de ruta
  const {horoscopeName} = route.params; // Obtén el nombre del horóscopo
  console.log(horoscopeName);
  const navigation = useNavigation();

  return (
    <View>
      <Text>{horoscopeName}</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home' as never)}
      />
    </View>
  );
};

export default DescriptionSign;
