import * as yup from "yup";

const Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

const rnombre: RegExp = /^[A-Z][a-z]+$/;

export const validation = yup.object().shape({
  name: yup
    .string()
    .matches(rnombre, "invalid name")
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(4)
    .matches(Regex, { message: "Please create a stronger password" })
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must match")
    .required("Please confirm your password"),
});
