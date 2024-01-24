import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial
const initialState: number = 0;

// Crea el slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    // Puedes agregar otras acciones según tus necesidades
  },
});

// Exporta las acciones generadas automáticamente
export const { increment, decrement } = counterSlice.actions;

// Exporta el reducer
export default counterSlice.reducer;
