
import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from './Slices/LanguageSlice';
import ThemeSlice from "./Slices/ThemeSlice";
const store = configureStore({
  reducer: {
    language: LanguageSlice.reducer,
    isDark:ThemeSlice.reducer
  },
});
export default store;