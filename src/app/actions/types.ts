export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';
export const CHANGE_LNG = 'CHANGE_LNG';

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export interface IncrementByAmountAction {
  type: typeof INCREMENT_BY_AMOUNT;
  payload: number;
}

export interface ChangeLngAction {
  type: typeof CHANGE_LNG;
  payload: string;
}

export type CounterActionTypes = IncrementAction | DecrementAction | IncrementByAmountAction;
export type LngActionTypes = ChangeLngAction;
