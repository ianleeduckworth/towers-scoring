import { calculateScore, isMoonshot } from './scoreCalculator';

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
});

describe('isMoonshot tests', () => {
  it('calculates bet 0 got 0 correctly', () => {
    const bet = 0;
    const got = 0;
    const result = isMoonshot({ bet, got });
    expect(result).toBe(true);
  });

  it('calculates bet 0 got non-0 correctly', () => {
    const bet = 0;
    const got = 1;
    const result = isMoonshot({ bet, got });
    expect(result).toBe(false);
  });

  it('calculates bet non-0 got 0 correctly', () => {
    const bet = 1;
    const got = 0;
    const result = isMoonshot({ bet, got });
    expect(result).toBe(false);
  });
});
