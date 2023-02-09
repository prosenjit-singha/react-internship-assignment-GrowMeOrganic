import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = () => (
  <Typography
    variant="h4"
    component={Link}
    to="/"
    color="primary.main"
    fontWeight={600}
  >
    GrowMeOrganic
  </Typography>
);

export default Logo;
