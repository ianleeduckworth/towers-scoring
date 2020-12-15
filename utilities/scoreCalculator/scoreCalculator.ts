import { Player } from '../../data/game';

/**
 * Calculates a player's score based on the rules
 * @param bet the number that the player bet
 * @param got the number that the player actually got
 */
export const calculateScore = (bet: number, got: number): number => {
  // if a moonshot occurred, 50 points are awarded
  if (isMoonshot({ bet, got })) {
    return 50;
  }

  // the first digit of your score makes your base score.  Ex: if you got 37, your base score is 3
  const baseScore = parseInt(got.toString().substring(0, 1), 10);

  // begin tracking the score
  let score = baseScore;

  // if your bet was less than what you actually got (or equal) you get your score included
  if (got <= bet) {
    score += got;
  }

  // if you hit your bet exactly, you get 10 extra points.  Go you!
  if (bet === got) {
    score += 10;
  }

  return score;
};

/**
 * Determines whether or not the player earned a moonshot.
 * This occurs when a player bets 0 and gets 0
 * @param player the player to check
 */
export const isMoonshot = (player?: Player): boolean => {
  if (!player) {
    return false;
  }
  if (player.bet === 0 && player.got === 0) {
    return true;
  }

  return false;
};
