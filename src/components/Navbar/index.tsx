import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Navbar() {
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" component="h1">
          GrowMeOrganic
        </Typography>
        <IconButton sx={{ ml: "auto" }}>
          <DarkModeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
