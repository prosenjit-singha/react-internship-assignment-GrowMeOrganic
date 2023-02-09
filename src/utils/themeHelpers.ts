import { createTheme } from "@mui/material";

type Mode = "light" | "dark";

export const getTheme = (mode: Mode) => {
  const isDark = mode === "dark";
  return createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
};
