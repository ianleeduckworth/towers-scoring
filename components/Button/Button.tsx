import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { defaults, globalStyles } from '../../styles/global';

interface ButtonProps {
    text: string;
    onPress: () => void;
}
export const Button = ({
    text,
    onPress
}: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: 360,
    },
    button: {
        borderRadius: 5,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: defaults.mainColor,
    },
    buttonText: {
        ...globalStyles.paragraphText,
        color: defaults.white,
        textTransform: 'uppercase',
        textAlign: 'center',
    },
});