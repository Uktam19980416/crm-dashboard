import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../store/Slices/ThemeSlice";
export default () => {
    const dispatch = useDispatch();
    let theme = useSelector(state=>state.isDark.bool)
    const setIsDarkMode = ()=> {
        dispatch(themeActions.changeTheme())
    }
  return (
    <DarkModeToggle onChange={setIsDarkMode} checked={theme} size={80} />
  );
};
