export type Player = {
    got?: number;
    bet?: number;
}

export type Round = {
    roundNumber: number;
    player1: Player;
    player2: Player;
    player3?: Player;
    player4?: Player;
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
