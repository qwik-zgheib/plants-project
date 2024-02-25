import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import languageReducer from './languageSlice';
import themeReducer from './themeSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  language: languageReducer,
  theme: themeReducer,
});

export default rootReducer;
