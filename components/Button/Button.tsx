import * as React from 'react';
import {
  Text, TouchableOpacity, View, StyleSheet,
} from 'react-native';
import { defaults, globalStyles } from '../../styles/global';

interface ButtonProps {
    text: string;
    onPress: () => void;
}
export const Button = ({
  text,
  onPress,
}: ButtonProps) => (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: defaults.mainColor,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  buttonContainer: {
    minWidth: 360,
  },
  buttonText: {
    ...globalStyles.paragraphText,
    color: defaults.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
