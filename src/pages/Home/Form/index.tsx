import { Paper, TextField, Typography } from "@mui/material";
import { useFormik, FormikHelpers } from "formik";
import formSchema from "../../../schemas/formSchema";
const initialValues = {
  fullName: "",
  phoneNumber: "",
  email: "",
};

function Form() {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit,
    });

  function onSubmit(
    values: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) {
    console.log(values);
  }
  return (
    <Paper
      elevation={5}
      sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}
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
    </Paper>
  );
}

export default Form;
