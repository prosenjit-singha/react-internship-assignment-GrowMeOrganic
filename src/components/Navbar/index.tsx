import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeToggler } from "../../contexts/ThemeTogglerProvider";
import { Link } from "react-router-dom";

function Navbar() {
  const { toggleTheme, isDark } = useThemeToggler();
  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white !important",
        }}
      >
        <Typography variant="h4" component={Link} to="/">
          GrowMeOrganic
        </Typography>
        <IconButton onClick={toggleTheme} sx={{ ml: "auto", color: "inherit" }}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
