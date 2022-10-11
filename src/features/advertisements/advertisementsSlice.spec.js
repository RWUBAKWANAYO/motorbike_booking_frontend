import advertisementsReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './advertisementsSlice';

describe('categories reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(advertisementsReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = advertisementsReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = advertisementsReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = advertisementsReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
