import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RunningScores } from './components/RunningScores/RunningScores';
import { Game } from './data/game';

export default function App() {
  const game: Game = {
    players: {
      player1: 'Ian',
      player2: 'Hope',
      player3: 'Boop Boop',
      player4: 'Mimi',
    },
    rounds: [{
      roundNumber: 1,
      player1: {
        bet: 20,
        got: 25,
      },
      player2: {
        bet: 30,
        got: 28,
      },
      player3: {
        bet: 20,
        got: 19,
      },
      player4: {
        bet: 0,
        got: 0,
      }      
    },
    {
      roundNumber: 2,
      player1: {
        bet: 18,
        got: 30,
      },
      player2: {
        bet: 20,
        got: 20,
      },
      player3: {
        bet: 25,
        got: 26,
      },
      player4: {
        bet: 0,
        got: 0,
      }       
    }]
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <RunningScores game={game} />
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
