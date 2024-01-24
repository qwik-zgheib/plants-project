import { configureStore } from '@reduxjs/toolkit';

// Importa tus reducers aquí
import counterReducer from './reducers/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
