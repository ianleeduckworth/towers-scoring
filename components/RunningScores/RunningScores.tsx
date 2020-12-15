import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Game } from '../../data/game';
import { defaults, globalStyles } from '../../styles/global';
import { calculateScore } from '../../utilities/scoreCalculator/scoreCalculator';

interface RunningScoreProps {
    game: Game;
}

export const RunningScores = ({ game }: RunningScoreProps) => {
  const player1Score = game.rounds.map(
    (r) => ((r.player1.bet !== undefined && r.player1.got !== undefined)
      ? calculateScore(r.player1.bet, r.player1.got) : 0),
  ).reduce((a, b) => a + b);

  const player2Score = game.rounds.map(
    (r) => ((r.player2.bet !== undefined && r.player2.got !== undefined)
      ? calculateScore(r.player2.bet, r.player2.got) : 0),
  ).reduce((a, b) => a + b);

  const player3Score = game.players.player3 ? game.rounds.map(
    (r) => ((r.player3?.bet !== undefined && r.player3.got !== undefined)
      ? calculateScore(r.player3.bet, r.player3.got) : 0),
  ).reduce((a, b) => a + b) : undefined;

  const player4Score = game.players.player4 ? game.rounds.map(
    (r) => ((r.player4?.bet !== undefined && r.player4.got !== undefined)
      ? calculateScore(r.player4.bet, r.player4.got) : 0),
  ).reduce((a, b) => a + b) : undefined;

  return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Scores</Text>
            </View>
            <View style={styles.scoreContainer}>
                <View style={styles.scoreItem}>
                    <Text style={globalStyles.paragraphText}>{game.players.player1}</Text>
                    <Text style={globalStyles.paragraphText}>{player1Score}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={globalStyles.paragraphText}>{game.players.player2}</Text>
                    <Text style={globalStyles.paragraphText}>{player2Score}</Text>
                </View>
                {player3Score
                    && <View style={styles.scoreItem}>
                        <Text style={globalStyles.paragraphText}>{game.players.player3}</Text>
                        <Text style={globalStyles.paragraphText}>{player3Score}</Text>
                    </View>
                }
                {player4Score
                    && <View style={styles.scoreItem}>
                        <Text style={globalStyles.paragraphText}>{game.players.player4}</Text>
                        <Text style={globalStyles.paragraphText}>{player4Score}</Text>
                    </View>
                }
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaults.mediumGray,
    borderBottomColor: defaults.black,
    borderTopColor: defaults.black,
    borderWidth: 1,
    height: 100,
    minWidth: '100%',
    paddingLeft: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  scoreItem: {
    flexDirection: 'column',
    paddingRight: 40,
  },
  title: {
    ...globalStyles.titleText,
    marginBottom: 4,
  },
  titleContainer: {
    marginBottom: 3,
  },
});
