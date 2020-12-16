/* eslint-disable max-len */
import * as React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../RootStack';
import { globalStyles } from '../../styles/global';
import { Button } from '../../components/Button/Button';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Rules'
>;

type RulesScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

export const RulesScreen = ({ navigation }: RulesScreenProps) => (
  <SafeAreaView style={styles.rulesContainer}>
    <ScrollView>
      <Text style={styles.titleText}>Rules of the Game</Text>
      <Text style={styles.paragraphText}>Towers is a game played using a set of double six dominoes (a set with 28 total ranging from double zero all the way up to double six).  It is a game for 2 to 4 players.  It is played in rounds where each player takes a turn counter clockwise.  The object of the game is to bet on your score, then build and take towers in order to hit your bet and to score more points round over round than your opponents.</Text>
      <Text style={styles.sectionHeaderText}>Setup</Text>
      <Text style={styles.paragraphText}>Place all dominoes face down and shuffle them until everyone is satisfied.  Each player should then draw dominoes.  Use the chart below to determine how many each person should draw.</Text>
      <View style={styles.grid}>
        {/* Column 1 */}
        <View style={styles.column}>
          <Text style={styles.gridHeader}>Players</Text>
          <Text style={styles.gridItem}>2</Text>
          <Text style={styles.gridItem}>3</Text>
          <Text style={styles.gridItem}>4</Text>
        </View>
        {/* Column 2 */}
        <View style={styles.column}>
          <Text style={styles.gridHeader}>Dominos to Draw</Text>
          <Text style={styles.gridItem}>10</Text>
          <Text style={styles.gridItem}>8</Text>
          <Text style={styles.gridItem}>6</Text>
        </View>
      </View>
      <Text style={styles.paragraphText}>Any dominoes that are not in play should not be viewed by anyone.  They should be placed aside for the next round.</Text>
      <Text style={styles.paragraphText}>Once each player has drawn their dominoes, they may look at the dominoes that they have selected.  Nobody may look at anybody else’s dominoes (you should set yours up in such a way that nobody else can see).  Use any method to determine who will go first (you could roll a dice, do rock paper scissors, anything like that as long as it’s fair).  The person who is selected to go first will then make a bet.  A bet is determined by looking at the dominoes you have in your hand and is a declaration of how many points you think you will score (note that the formulation of this number is based entirely on your own strategy).  Proceeding clockwise, each person should bet their score.  Once everyone has bet, gameplay can begin.</Text>
      <Text style={styles.sectionHeaderText}>Gameplay</Text>
      <Text style={styles.paragraphText}>The person who made their bet first starts the round.  S/he can take any domino and place it face up in the play area in the center of the table.  Play will then proceed clockwise with each player playing a domino.  On any turn, a player can either play on top of an existing tower or start a new one until there are three towers in play.  A new tower can be started with any domino except a double. Once there are three towers in play, the player whose turn it is must play on top of an existing tower, or they must pass if they are unable to play.  In the event that you have to pass, you must discard a domino into the pile of unused dominoes.  To play on top of a tower, you must be able to match a number of the domino at the top of the tower to a domino in your hand.  For example, if a tower has a 5/3 domino on top, you could play any domino that has a 5 on one side or any domino that has a 3 on one side.  Whichever domino you play, you must play it in such a way that the matching numbers are on the same side.</Text>
      <Text style={styles.paragraphText}>A tower is taken by a player once it either reaches a height of 3 dominoes, or a double is played matching at least one of the sides.  Once a player takes a tower, the tower will count towards their score.  You must pull the tower towards yourself and place it at the edge of the table.  You must rotate the dominoes so that one of the numbered sides is facing the table.  This is the side that will count toward your score (the other side does nothing).  Thus, if a 5/3 domino is the only domino in a tower and you choose to take the tower with a double 5, you can either rotate the stack so that the side with 5 and 5 is facing you (netting you 10 points) or the side with 5 and 3 (netting you 8 points).  Remember that the objective is to get as close to your bet score as possible.  Once a tower is taken, any player can start a new tower in its place with any non-double domino.</Text>
      <Text style={styles.paragraphText}>The round is finished once nobody has any more dominoes that can be played.  Any dominoes left in the play area do nothing.  Each person should count up the cumulative value of all towers based on the side closest to the player (that they selected when taking the tower).  This number represents your round points.</Text>
      <Text style={styles.sectionHeaderText}>Scoring</Text>
      <Text style={styles.paragraphText}>Once gameplay is finished after a round, each player must add up the scoring side of all towers they have taken (remember that this is all the sides facing your edge of the table).  For example, if you took one tower where the base domino was a 5/3, the middle was a 4/3 and the top was a 4/6 and it was rotated so that the 4 in the 4/6 domino was facing you, your score would be 13 (4+4+5) for that tower.  [Note that if it was rotated so that the 6 was facing you, it would be 12 (6+3+3)].  Since in this example, this is your only tower, your score would be 13.  If you took more than one tower, you would repeat this process for each tower.</Text>
      <Text style={styles.paragraphText}>Once your round points are calculated, you must use the following to determine your round score.  Your score starts at 0, follow the formula below to calculate your score:</Text>
      <Text style={styles.listItem}>1. Add 10 to your score if you hit your bet score exactly</Text>
      <Text style={styles.listItem}>2. Add 1 to your score for every 10 of your round points (example, if your round points was 28, you would get 2 points.  If it was 32 you get 3 points)</Text>
      <Text style={styles.listLastItem}>3. If you go under or hit your bet, add the round points to your score.  If you go over, you bust and you get no additional points</Text>
      <Text style={styles.paragraphText}>One additional scoring caveat is called the moonshot.  This is when you bet 0 and get 0.  When this happens, you have completed the moonshot.  When you are successful, your score for the round is 50 points.</Text>
      <Text style={styles.sectionHeaderText}>Additional Rules and Clarifications</Text>
      <Text style={styles.listItem}>1. If you take a tower and move it toward yourself and rotate it so as to indicate which side you want scored, you are not permitted to change which side you want scored later.</Text>
      <Text style={styles.listItem}>2. For towers that you have taken, you may not lift up dominoes to see what is underneath the top.</Text>
      <Text style={styles.listItem}>3. At no time are you permitted to move dominoes in play so that you can see what domino(s) in the towers that they are covering up.</Text>
      <Text style={styles.listItem}>4. Up to 3 towers can be in play at a time.</Text>
      <Text style={styles.listItem}>5. Towers cannot exceed 3 dominoes in height.  When a player plays a 3rd domino, the tower is taken and the tower is removed from play.</Text>
      <Text style={styles.listItem}>6. You may not start a tower with a double.</Text>
      <Text style={styles.listLastItem}>7. Open collusion during round play is not permitted.  Any conversation is permissible when a round is not in play</Text>
      <Text style={styles.sectionHeaderText}>Glossary</Text>
      <Text style={styles.paragraphText}>Round: a single unit of gameplay; begins with each player declaring a score and ends when all players are out of dominoes.  After each round a scoring period occurs, then the next round can begin.</Text>
      <Text style={styles.paragraphText}>Bet: before each round, each player must bet a score.  This is the score that you think you will achieve based on the hand you have been dealt.</Text>
      <Text style={styles.paragraphText}>Play area: the area in the center of the table.  This is where the towers will be started, built, and taken.</Text>
      <Text style={styles.paragraphText}>Tower: dominoes stacked on top of each other based on matching numbers.  Towers are built as players take their turns by laying down dominos where one side matches the topmost domino.  A tower can be taken either when it reaches a height of 3 dominoes or when someone lays down a double that matches one of the sides.</Text>
      <Text style={styles.paragraphText}>Round points: after a round is finished, each player should add up all the sides of the dominoes facing them.  This value is your round points.  It is applied to the scoring rules to determine a round score.</Text>
      <Text style={styles.paragraphText}>Round score: The score for a player for the round.  Is added to round scores from previous rounds to create the game score.</Text>
      <Text style={styles.paragraphText}>Game score: the cumulative effect of your score based on each round played thus far.  This is what determines if you win/lose and/or what place you come in.</Text>
      <View>
        <Button text="Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    marginRight: 20,
  },
  grid: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  gridHeader: {
    ...globalStyles.paragraphText,
  },
  gridItem: {
    ...globalStyles.paragraphText,
    fontWeight: 'normal',
  },
  listItem: {
    ...globalStyles.paragraphText,
    fontWeight: 'normal',
    marginLeft: 10,
  },
  listLastItem: {
    ...globalStyles.paragraphText,
    fontWeight: 'normal',
    marginBottom: 20,
    marginLeft: 10,
  },
  paragraphText: {
    ...globalStyles.paragraphText,
    fontWeight: 'normal',
    marginBottom: 20,
  },
  rulesContainer: {
    ...globalStyles.container,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  sectionHeaderText: {
    ...globalStyles.paragraphText,
    marginBottom: 16,
  },
  titleText: {
    ...globalStyles.titleText,
    marginBottom: 20,
  },
});
