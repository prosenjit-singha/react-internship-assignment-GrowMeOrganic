import { useEffect } from "react";
import { Box, TextField, Typography, Button, lighten } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserProvider";
import formSchema from "../../../schemas/formSchema";
import UserInfo from "../../../types/userInfo.type";

const initialValues: UserInfo = {
  fullName: "",
  phoneNumber: "",
  email: "",
};

function Form() {
  const navigate = useNavigate();
  const { updateUserData, user } = useUser();
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = useFormik({
    initialValues: user || initialValues,
    validationSchema: formSchema,
    onSubmit,
  });

  function onSubmit(values: UserInfo, actions: FormikHelpers<UserInfo>) {
    // save data to the local storage
    updateUserData(values);

    //navigate to the second page
    navigate("/list-of-data");
  }

  useEffect(() => {
    if (!user) setValues(initialValues);
  }, [user]);

  return (
    <Box
      sx={(theme) => ({
        p: 3,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: ["100%", "60%", "40%", "25%"],
        boxShadow: ["none", theme.shadows[5]],
        bgcolor: ["transparent", lighten(theme.palette.background.paper, 0.05)],
      })}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" component="h1">
        Form
      </Typography>
      <TextField
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.fullName && touched.fullName}
        helperText={touched.fullName && errors.fullName}
        label="Full Name"
        placeholder="Full Name"
        size="small"
      />
      <TextField
        name="phoneNumber"
        value={values.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.phoneNumber && touched.phoneNumber}
        helperText={touched.phoneNumber && errors.phoneNumber}
        label="Phone Number"
        placeholder="+000 123 1231231"
        size="small"
      />
      <TextField
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.email && touched.email}
        helperText={touched.email && errors.email}
        label="Email"
        placeholder="example@domain.com"
        size="small"
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ width: "fit-content", mx: "auto" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Form;
