import { useEffect } from "react";
import { toggleThemeClass } from "../../theme/config";
import {useLocalStorage} from "@rehooks/local-storage";

export const ThemeState = {
  Dark: "dark",
  Light: "light",
  System: "system",
} as const;

export type ThemeState = (typeof ThemeState)[keyof typeof ThemeState];

export const themes = Object.values(ThemeState);

export function isTheme(theme: unknown): theme is ThemeState {
  return typeof theme === "string" && themes.includes(theme as ThemeState);
}

export const useTheme = (theme?: ThemeState) => {
  const [storedTheme, setStoredTheme, deleteStoredTheme] = useLocalStorage<ThemeState>('theme', ThemeState.System);
  const toggleTheme = (theme: ThemeState) => {
    if ([ThemeState.Dark, ThemeState.Light].includes(theme as any)) {
      setStoredTheme(theme);
    } else {
      deleteStoredTheme()
    }
    toggleThemeClass();
  }

  useEffect(() => {
    if (theme) {
      toggleTheme(theme);
    }
  }, []);

  return {
    toggleTheme,
    theme: storedTheme
  };
};
