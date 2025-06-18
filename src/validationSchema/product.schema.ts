import * as yup from "yup";
import {
  PracticeSchemaError,
} from "../constant/formErrorMessage.constant";

export const productSchema = yup
  .object({
    name: yup
      .string()
      .required(PracticeSchemaError.name),
    description: yup.string().required(PracticeSchemaError.description),
    price: yup.number().required(PracticeSchemaError.price),
    offer_price: yup.number().required(PracticeSchemaError.offer_price),
    category_id: yup.number().required(PracticeSchemaError.category_id),
    images: yup
      .mixed<File | File[]>()
      .required(PracticeSchemaError.image)
      .test("images", PracticeSchemaError.image, function (value) {
        if (!value) return false;
        if (Array.isArray(value)) {
          return value.length > 0;
        }
        return value instanceof File;
      }),
  })
  .required();
