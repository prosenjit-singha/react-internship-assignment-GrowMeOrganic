import * as yup from "yup";

const required = "required";

const formSchema = yup.object().shape({
  fullName: yup.string().required(required),
  phoneNumber: yup.string().min(11).max(14).required(required),
  email: yup.string().email("enter an valid email").required(required),
});

export default formSchema;
