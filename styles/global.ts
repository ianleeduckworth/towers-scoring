import { StyleSheet } from 'react-native';

export const defaults = {
    mainColor: '#476A6F',
    accentColor: '#C44C31',
    white: '#FFFFFF',
    black: '#000000',
    lightGray: '#F8F8F8',
    mediumGray: '#F0F0F0',
    green: '#1AB800',
    yellow: '#B8A500',
    red: '#B80000',
    titleTextSize: 24,
    normalTextSize: 18,
    font: 'Roboto',
}

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    titleText: {
        fontFamily: defaults.font,
        fontSize: defaults.titleTextSize,
        color: defaults.black,
        fontWeight: 'bold'
    },
    paragraphText: {
        fontFamily: defaults.font,
        fontSize: defaults.normalTextSize,
        color: defaults.black,
        fontWeight: 'bold',
    }
})