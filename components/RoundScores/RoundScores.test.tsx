import renderer from 'react-test-renderer';
import * as React from 'react';
import { RoundScores } from './RoundScores';
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
        }
    }]
};

describe('round scores', () => {
    it('renders properly with 2 players', () => {
        const element = renderer.create(
            <RoundScores players={baseGame.players} round={baseGame.rounds[0]} />
        ).toJSON();

        expect(element).toMatchSnapshot();
    });

    it('renders properly with 3 players', () => {
        const game = {...baseGame};
        game.players.player3 = 'Player3';
        game.rounds[0].player3 = {
            bet: 20,
            got: 20,
        };

        const element = renderer.create(
            <RoundScores players={game.players} round={game.rounds[0]} />
        ).toJSON();

        expect(element).toMatchSnapshot();
    });

    it('renders properly with 4 players', () => {
        const game = {...baseGame};
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
            <RoundScores players={game.players} round={game.rounds[0]} />
        ).toJSON();

        expect(element).toMatchSnapshot();
    });
})