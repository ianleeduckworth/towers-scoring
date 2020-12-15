import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Game } from '../../data/game';
import { defaults } from '../../styles/global';
import { calculateScore } from '../../utilities/scoreCalculator';

interface RunningScoreProps {
    game: Game;
}

export const RunningScores = ({ game }: RunningScoreProps) => {
    let player1Score = game.rounds.map(r =>
        (r.player1.bet !== undefined && r.player1.got !== undefined) ? calculateScore(r.player1.bet, r.player1.got) : 0
    ).reduce((a, b) => a + b);

    let player2Score = game.rounds.map(r =>
        (r.player2.bet !== undefined && r.player2.got !== undefined) ? calculateScore(r.player2.bet, r.player2.got) : 0
    ).reduce((a, b) => a + b);

    let player3Score = game.players.player3 ? game.rounds.map(r =>
        (r.player3?.bet !== undefined && r.player3.got !== undefined) ? calculateScore(r.player3.bet as number, r.player3.got as number) : 0
    ).reduce((a, b) => a + b) : undefined;

    let player4Score = game.players.player4 ? game.rounds.map(r =>
        (r.player4?.bet !== undefined && r.player4.got !== undefined) ? calculateScore(r.player4.bet as number, r.player4.got as number) : 0
    ).reduce((a, b) => a + b) : undefined;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Scores</Text>
            </View>
            <View style={styles.scoreContainer}>
                <View style={styles.scoreItem}>
                    <Text style={styles.text}>{game.players.player1}</Text>
                    <Text style={styles.text}>{player1Score}</Text>
                </View>
                <View style={styles.scoreItem}>
                    <Text style={styles.text}>{game.players.player2}</Text>
                    <Text style={styles.text}>{player2Score}</Text>
                </View>
                {player3Score &&
                    <View style={styles.scoreItem}>
                        <Text style={styles.text}>{game.players.player3}</Text>
                        <Text style={styles.text}>{player3Score}</Text>
                    </View>
                }
                {player4Score &&
                    <View style={styles.scoreItem}>
                        <Text style={styles.text}>{game.players.player4}</Text>
                        <Text style={styles.text}>{player4Score}</Text>
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        backgroundColor: defaults.mediumGray,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderTopColor: defaults.black,
        borderBottomColor: defaults.black,
    },
    title: {
        color: defaults.black,
        fontWeight: 'bold',
        fontSize: defaults.titleTextSize,
        marginBottom: 4,
    },
    text: {
        fontSize: defaults.normalTextSize,
        fontFamily: defaults.font,
        color: defaults.black,
        fontWeight: 'bold',
    },
    titleContainer: {
        marginBottom: 3,
    },
    scoreContainer: {
        flexDirection: 'row',
    },
    scoreItem: {
        flexDirection: 'column',
        paddingRight: 40
    }
});