import { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";


export default function useDarkMode(): [string, (theme: string) => void] {
    const content = useContext(ThemeContext);
    const theme = content?.theme as string;
    const setTheme = content?.setTheme as (theme: string) => void
  return [theme, setTheme]
}
