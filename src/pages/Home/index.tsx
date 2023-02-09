import { Alert, Box, Snackbar } from "@mui/material";
import Form from "./Form";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const { state } = useLocation();
  const [error, setError] = useState({
    state: !!state?.error?.message,
    message: state?.error?.message || "",
  });

  function handleAlertClose() {
    setError((prev) => ({ ...prev, state: false }));
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "calc(100vh - 56px)",
      }}
    >
      <Snackbar
        open={error.state}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={handleAlertClose}
        autoHideDuration={3000}
      >
        <Alert severity="warning" onClose={handleAlertClose}>
          {error.message}
        </Alert>
      </Snackbar>
      <Form />
    </Box>
  );
};

export default Home;
