import React from 'react';
import {
  StyleSheet, View, TouchableOpacity, Text,
} from 'react-native';
import { defaults, globalStyles } from '../../styles/global';

interface CardProps {
    gameName: string;
    date: Date;
    onGamePress: () => void;
    onExitPress: () => void;
}

export const Card = ({
  gameName, date, onGamePress, onExitPress,
}: CardProps) => (
        <View style={styles.container}>
            <TouchableOpacity style={styles.infoContainer} onPress={onGamePress}>
                <Text style={styles.gameNameText}>{gameName}</Text>
                <Text style={styles.text}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exitContainer} onPress={onExitPress}>
                <Text style={styles.text}>x</Text>
            </TouchableOpacity>
        </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaults.lightGray,
    borderBottomColor: defaults.black,
    borderTopColor: defaults.black,
    borderWidth: 1,
    flexDirection: 'row',
    height: 100,
    minWidth: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  exitContainer: {
    justifyContent: 'center',
  },
  gameNameText: {
    ...globalStyles.paragraphText,
    marginBottom: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    ...globalStyles.paragraphText,
  },
});
