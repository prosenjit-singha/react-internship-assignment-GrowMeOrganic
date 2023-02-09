import { Theme } from "@mui/material";
import { createContext, useContext, useState } from "react";
import { getTheme } from "../../utils/themeHelpers";

type Value = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: Theme;
};

const ThemeTogglerContext = createContext<Value>({} as Value);

const ThemeTogglerProvider = ({ children }: { children: JSX.Element }) => {
  const [isDark, setIsDark] = useState(false);
  function toggleTheme() {
    setIsDark((prev) => !prev);
  }
  const theme = getTheme(isDark ? "dark" : "light");

  const value = { isDark, toggleTheme, theme };

  return (
    <ThemeTogglerContext.Provider value={value}>
      {children}
    </ThemeTogglerContext.Provider>
  );
};

export default ThemeTogglerProvider;

export const useThemeToggler = () => useContext(ThemeTogglerContext);
