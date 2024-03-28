import { createContext, Context } from "react";

export interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext: Context<DarkModeContextType> =
  createContext<DarkModeContextType>({
    darkMode: false,
    toggleDarkMode: () => {},
  });
