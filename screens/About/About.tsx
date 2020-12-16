import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../RootStack';
import { Button } from '../../components/Button/Button';
import { globalStyles } from '../../styles/global';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'About'
>;

type AboutScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

export const AboutScreen = ({ navigation }: AboutScreenProps) => (
  <View style={globalStyles.container}>
    <Text>About Screen</Text>
    <Button text="To Home Screen" onPress={() => navigation.navigate('Home')} />
  </View>
);
