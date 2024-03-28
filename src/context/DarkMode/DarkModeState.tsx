// DarkModeState.tsx
"use client";

import React, { useState } from "react";
import { DarkModeContext, DarkModeContextType } from "./DarkModeContext";

export const DarkModeState = (props: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const darkModeContextValue: DarkModeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={darkModeContextValue}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
