import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../RootStack';
import { Button } from '../../components/Button/Button';
import { globalStyles } from '../../styles/global';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type HomeScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

export const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <View style={globalStyles.container}>
    <Text>Home Screen</Text>
    <Button text="To About Screen" onPress={() => navigation.navigate('About')} />
  </View>
);
