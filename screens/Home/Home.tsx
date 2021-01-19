import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.textContainer}>
      <Text style={styles.italics}>
        No current games.  Please click NEW GAME to begin a new game
      </Text>
    </View>
    <View style={styles.button}>
      <Button text="New Game" onPress={() => navigation.navigate('Rules')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  italics: {
    ...globalStyles.paragraphText,
    fontStyle: 'italic',
  },
  textContainer: {
    flex: 10,
    justifyContent: 'center',
  },
});
