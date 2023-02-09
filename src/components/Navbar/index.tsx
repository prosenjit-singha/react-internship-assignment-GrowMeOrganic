import { AppBar, IconButton, Toolbar, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import { useThemeToggler } from "../../contexts/ThemeTogglerProvider";
import Logo from "../Logo";
import { useUser } from "../../contexts/UserProvider";

function Navbar() {
  const { toggleTheme, isDark } = useThemeToggler();
  const { user, clearUserData } = useUser();
  return (
    <AppBar
      position="sticky"
      sx={({ palette }) => ({ bgcolor: palette.background.default })}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Logo />
        <Tooltip title="Toggle Theme" describeChild>
          <IconButton onClick={toggleTheme} sx={{ ml: "auto" }}>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
        {user && (
          <Tooltip title="Clear User Data" describeChild>
            <IconButton onClick={clearUserData}>
              <PersonOffIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
