const { createSlice } = require("@reduxjs/toolkit");



const ThemeSlice = createSlice({
    name: "theme", 
    initialState:{bool:false}, 
    reducers: {
        changeTheme(state, action) {
            console.log(action.payload);
             state.bool = !state.bool;
        }
    }
})

export const themeActions = ThemeSlice.actions;
export default ThemeSlice;

