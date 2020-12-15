export type Score = {
    got?: number;
    bet?: number;
}

export type Round = {
    roundNumber: number;
    player1: Score;
    player2: Score;
    player3?: Score;
    player4?: Score;
}

export type Players = {
    player1: string;
    player2: string;
    player3?: string;
    player4?: string;
}

export type Game = {
    players: Players,
    rounds: Round[];
}
