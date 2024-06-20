
import { lang } from './data/languaages';
import { createSlice } from '@reduxjs/toolkit';

 const LanguageSlice = createSlice({
    name: 'language',
    initialState: { currentLanguage:lang['uz'] },
    reducers: {
        changeLanguage(state, action) {
            state.currentLanguage = lang[action.payload];
        }
    }
})

export const languageActions = LanguageSlice.actions;
export default LanguageSlice;