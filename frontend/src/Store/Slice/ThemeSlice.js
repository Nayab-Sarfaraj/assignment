import { createSlice } from "@reduxjs/toolkit";
const THEME = {
  DARK: "dark",
  LIGHT: "light",
};
const themeSlice = createSlice({
  name: "Theme",
  initialState: THEME.LIGHT,
  reducers: {
    toggleTheme(state, action) {
      state = action.payload;
      return state;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
