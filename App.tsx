import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Card 
        gameName="Test Game" 
        date={new Date('12/22/2020')}
        onGamePress={() => console.log('we are starting a new game')}
        onExitPress={() => console.log('we are deleting this game')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
