import React from "react";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light"; // light theme as the default;
};

export const ThemeContext = React.createContext<any>(null);

export type ThemeProviderProps = {
  children: React.ReactNode;
  initialTheme?: string;
};

export const ThemeProvider = ({ initialTheme, children }: ThemeProviderProps) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      const isDark = rawTheme === "dark";
      root.classList.remove(isDark ? "light" : "dark");
      root.classList.add(rawTheme);
      localStorage.setItem("theme", rawTheme);
    }
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
