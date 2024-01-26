import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import languageReducer from './languageSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  language: languageReducer,
});

export default rootReducer;
