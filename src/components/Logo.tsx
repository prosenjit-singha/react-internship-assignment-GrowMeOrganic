import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => (
  <Typography
    component={Link}
    to="/"
    sx={{
      color: "primary.main",
      fontWeight: 600,
      fontSize: "clamp(1.5rem, 5vw, 2rem)",
    }}
  >
    GrowMeOrganic
  </Typography>
);

export default Logo;
