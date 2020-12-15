import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { defaults, globalStyles } from '../../styles/global';

interface CardProps {
    gameName: string;
    date: Date;
    onGamePress: () => void;
    onExitPress: () => void;
}

export const Card = ({ gameName, date, onGamePress: onGamePress, onExitPress }: CardProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.infoContainer} onPress={onGamePress}>
                <Text style={{...styles.text, marginBottom: 10}}>{gameName}</Text>
                <Text style={styles.text}>{date.toLocaleDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.exitContainer} onPress={onExitPress}>
                <Text style={styles.text}>x</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        height: 100,
        backgroundColor: defaults.lightGray,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderTopColor: defaults.black,
        borderBottomColor: defaults.black,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        ...globalStyles.paragraphText
    },
    exitContainer: {
        justifyContent: 'center',
    },
})