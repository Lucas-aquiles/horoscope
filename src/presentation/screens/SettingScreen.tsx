import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text> SettingScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home' as never)}
      />
    </View>
  );
};

export default SettingScreen;
