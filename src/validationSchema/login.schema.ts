import * as yup from "yup";
import {
  LoginSchemaError,
  SignupError,
} from "../constant/formErrorMessage.constant";

export const loginSchema = yup
  .object({
    email: yup
      .string()
      .required(LoginSchemaError.email.required)
      .email(LoginSchemaError.email.valid)
      .lowercase(),
    password: yup.string().required(LoginSchemaError.password),
  })
  .required();
