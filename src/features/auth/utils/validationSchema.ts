/*
  This file defines validation schema for user login form
*/

import { object, string } from "yup";

const loginValidationSchema = object({
  username: string().required("Username is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/[0-9]/, "Password must contain at least one number")
});

export { loginValidationSchema };
