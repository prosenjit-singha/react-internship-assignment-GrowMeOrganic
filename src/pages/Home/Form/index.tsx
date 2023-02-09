import { Paper, TextField, Typography } from "@mui/material";

function Form() {
  return (
    <Paper
      elevation={5}
      sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" component="h1">
        Form
      </Typography>
      <TextField
        name="fullName"
        label="Full Name"
        placeholder="Full Name"
        size="small"
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
        placeholder="+000 123 1231231"
        size="small"
      />
      <TextField label="Email" placeholder="example@domain.com" size="small" />
    </Paper>
  );
}

export default Form;
