import renderer from 'react-test-renderer';
import * as React from 'react';
import { RunningScores } from './RunningScores';
import { Game } from '../../data/game';

const baseGame: Game = {
  players: {
    player1: 'Player1',
    player2: 'Player2',
  },
  rounds: [{
    roundNumber: 1,
    player1: {
      bet: 20,
      got: 30,
    },
    player2: {
      bet: 20,
      got: 30,
    },
  }],
};

describe('button', () => {
  it('renders correctly with 2 players and 1 round', () => {
    const element = renderer.create(
            <RunningScores game={baseGame} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with 3 players and 1 round', () => {
    const game = { ...baseGame };
    game.players.player3 = 'Player3';
    game.rounds[0].player3 = {
      bet: 20,
      got: 20,
    };

    const element = renderer.create(
            <RunningScores game={game} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with 4 players and 1 round', () => {
    const game = { ...baseGame };
    game.players.player3 = 'Player3';
    game.players.player4 = 'Player4';
    game.rounds[0].player3 = {
      bet: 20,
      got: 20,
    };
    game.rounds[0].player4 = {
      bet: 0,
      got: 0,
    };

    const element = renderer.create(
            <RunningScores game={game} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with 2 players and multiple rounds', () => {
    const game = { ...baseGame };
    game.rounds = [...game.rounds, {
      roundNumber: 2,
      player1: {
        bet: 20,
        got: 20,
      },
      player2: {
        bet: 15,
        got: 30,
      },
    }];

    const element = renderer.create(
            <RunningScores game={game} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with 3 players and multiple rounds', () => {
    const game = { ...baseGame };
    game.players.player3 = 'Player3';
    game.rounds[0].player3 = {
      bet: 20,
      got: 20,
    };
    game.rounds = [...game.rounds, {
      roundNumber: 2,
      player1: {
        bet: 20,
        got: 20,
      },
      player2: {
        bet: 15,
        got: 30,
      },
      player3: {
        bet: 0,
        got: 0,
      },
    }];

    const element = renderer.create(
            <RunningScores game={game} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with 4 players and multiple rounds', () => {
    const game = { ...baseGame };
    game.players.player3 = 'Player3';
    game.players.player4 = 'Player4';
    game.rounds[0].player3 = {
      bet: 20,
      got: 20,
    };
    game.rounds[0].player4 = {
      bet: 0,
      got: 0,
    };
    game.rounds = [...game.rounds, {
      roundNumber: 2,
      player1: {
        bet: 20,
        got: 20,
      },
      player2: {
        bet: 15,
        got: 30,
      },
      player3: {
        bet: 0,
        got: 0,
      },
      player4: {
        bet: 18,
        got: 17,
      },
    }];

    const element = renderer.create(
            <RunningScores game={game} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });
});
