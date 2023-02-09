import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { useThemeToggler } from "./contexts/ThemeTogglerProvider";
import UserProvider from "./contexts/UserProvider";
import router from "./routes";

function App() {
  const { theme } = useThemeToggler();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
