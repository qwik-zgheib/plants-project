import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT, CounterActionTypes } from './types';

export const increment = (): CounterActionTypes => {
  return {
    type: INCREMENT,
  };
};

export const decrement = (): CounterActionTypes => {
  return {
    type: DECREMENT,
  };
};

export const incrementByAmount = (amount: number): CounterActionTypes => {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: amount,
  };
};
