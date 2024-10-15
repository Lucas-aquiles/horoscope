import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Select' as never)}
      />

      <Text>holaa</Text>
    </View>
  );
};

export default HomeScreen;
