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
};

export const globalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: defaults.white,
    flex: 1,
    justifyContent: 'center',
  },
  paragraphText: {
    color: defaults.black,
    fontFamily: defaults.font,
    fontSize: defaults.normalTextSize,
    fontWeight: 'bold',
  },
  titleText: {
    color: defaults.black,
    fontFamily: defaults.font,
    fontSize: defaults.titleTextSize,
    fontWeight: 'bold',
  },
});
