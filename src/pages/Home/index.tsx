import { Box } from "@mui/material";
import Form from "./Form";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
        minHeight: "calc(100vh - 56px)",
      }}
    >
      <Form />
    </Box>
  );
};

export default Home;
