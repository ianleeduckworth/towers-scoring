import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Round, Players, Player } from '../../data/game';
import { defaults, globalStyles } from '../../styles/global';
import { calculateScore } from '../../utilities/scoreCalculator/scoreCalculator';

interface RoundScoresProps {
    round: Round;
    players: Players
}

export const RoundScores = ({ round, players }: RoundScoresProps) => {
    const getScore = (player: Player): number => {
        if (player.bet === undefined || player.got === undefined) {
            return 0;
        }

        return calculateScore(player.bet, player.got);
    }

    const getScoreStyling = (player?: Player) => {
        if (!player) {
            return styles.text;
        }

        const { bet, got } = player;
        if (bet === undefined || got === undefined) {
            return styles.text;
        }

        if (bet === got) {
            return styles.greenScoreText;
        }

        if (bet > got) {
            return styles.yellowScoreText;
        }

        if (got > bet) {
            return styles.redScoreText;
        }

        return styles.text;
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={globalStyles.titleText}>Round {round.roundNumber}</Text>
            </View>
            <View style={styles.scoresContainer}>
                {/* Column 1 */}
                <View style={styles.playersColumn}>
                    <Text style={globalStyles.paragraphText}>{""}</Text>
                    <Text style={globalStyles.paragraphText}>{players.player1}</Text>
                    <Text style={globalStyles.paragraphText}>{players.player2}</Text>
                    {players.player3 && round.player3 && <Text style={globalStyles.paragraphText}>{players.player3}</Text>}
                    {players.player4 && round.player4 && <Text style={globalStyles.paragraphText}>{players.player4}</Text>}
                </View>
                {/* Column 2 */}
                <View style={styles.column}>
                    <Text style={globalStyles.paragraphText}>Bet</Text>
                    <Text style={styles.text}>{round.player1.bet}</Text>
                    <Text style={styles.text}>{round.player2.bet}</Text>
                    {players.player3 && round.player3 && <Text style={styles.text}>{round.player3.bet}</Text>}
                    {players.player4 && round.player4 && <Text style={styles.text}>{round.player4.bet}</Text>}
                </View>
                {/* Column 3 */}
                <View style={styles.column}>
                    <Text style={globalStyles.paragraphText}>Got</Text>
                    <Text style={styles.text}>{round.player1.got}</Text>
                    <Text style={styles.text}>{round.player2.got}</Text>
                    {players.player3 && round.player3 && <Text style={styles.text}>{round.player3.got}</Text>}
                    {players.player4 && round.player4 && <Text style={styles.text}>{round.player4.got}</Text>}
                </View>
                {/* Column 4 */}
                <View style={styles.column}>
                    <Text style={globalStyles.paragraphText}>Score</Text>
                    <Text style={getScoreStyling(round.player1)}>{getScore(round.player1)}</Text>
                    <Text style={getScoreStyling(round.player2)}>{getScore(round.player2)}</Text>
                    {players.player3 && round.player3 && <Text style={getScoreStyling(round.player3)}>{getScore(round.player3)}</Text>}
                    {players.player4 && round.player4 && <Text style={getScoreStyling(round.player4)}>{getScore(round.player4)}</Text>}
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minWidth: '100%',
        height: 200,
        backgroundColor: defaults.lightGray,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: 1,
        borderTopColor: defaults.black,
        borderBottomColor: defaults.black,
        marginTop: 10,
        marginBottom: 10,
    },
    titleContainer: {
        marginTop: 4,
        marginBottom: 4,
    },
    scoresContainer: {
        flexDirection: 'row',
    },
    playersColumn: {
        width: '40%'
    },
    column: {
        width: '20%',
    },
    text: {
        ...globalStyles.paragraphText,
        fontWeight: 'normal',
    },
    redScoreText: {
        ...globalStyles.paragraphText,
        fontWeight: 'normal',
        color: defaults.red
    },
    yellowScoreText: {
        ...globalStyles.paragraphText,
        fontWeight: 'normal',
        color: defaults.yellow
    },
    greenScoreText: {
        ...globalStyles.paragraphText,
        fontWeight: 'normal',
        color: defaults.green
    },
});