import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const storedTheme: string | null = localStorage.getItem('theme');

const initialState: ThemeState = {
  theme:
    storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const data = action.payload;
      state.theme = data;
      localStorage.setItem('theme', data);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
