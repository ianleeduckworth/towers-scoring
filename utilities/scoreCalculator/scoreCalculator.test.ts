import { calculateScore } from "./scoreCalculator";

describe('scoreCalculator tests', () => {
    it('calculates a moonshot properly', () => {
        const bet = 0;
        const got = 0;
        const result = calculateScore(bet, got);
        expect(result).toBe(50);
    });

    it('calculates a bet less than a got correctly', () => {
        const bet = 10;
        const got = 20;
        const result = calculateScore(bet, got);
        expect(result).toBe(2);
    });

    it('calculates a bet greater than a got correctly', () => {
        const bet = 20;
        const got = 10;
        const result = calculateScore(bet, got);
        expect(result).toBe(11);        
    });

    it('calculates a bet equal to a got correctly', () => {
        const bet = 20;
        const got = 20;
        const result = calculateScore(bet, got);
        expect(result).toBe(32);           
    });
})