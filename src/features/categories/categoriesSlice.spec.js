import categoriesReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './categoriesSlice';

describe('categories reducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(categoriesReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = categoriesReducer(initialState, increment());
    expect(actual.value).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = categoriesReducer(initialState, decrement());
    expect(actual.value).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = categoriesReducer(initialState, incrementByAmount(2));
    expect(actual.value).toEqual(5);
  });
});
