import { createTheme } from "@mui/material";

type Mode = "light" | "dark";

export const getTheme = (mode: Mode) => {
  const isDark = mode === "dark";
  return createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
      primary: {
        main: isDark ? "#4bab76" : "#468e66",
      },
      background: {
        default: isDark ? "#16283a" : "#ecf2ff",
        paper: isDark ? "#16283a" : "#ecf2ff",
      },
    },
    typography: {
      allVariants: {
        color: isDark ? "#fff" : "#1f252a",
      },
    },
  });
};
