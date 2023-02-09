import { Box, Typography } from "@mui/material";
import Logo from "../Logo";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid " + theme.palette.divider,
        pt: 2,
        pb: 1,
      })}
    >
      <Logo />
      <Typography color="text.secondary" variant="body2">
        Made with ❤️ by Prosenjit Singha
      </Typography>
    </Box>
  );
}
