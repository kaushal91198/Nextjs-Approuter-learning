export enum EmailError {
  required = "Email is required",
  valid = "Email is not in valid format",
}
export enum PasswordError {
  required = "Password is required",
}

export const LoginSchemaError = Object.freeze({
  email: EmailError,
  password: PasswordError.required,
});

export const PracticeSchemaError = Object.freeze({
  name: "Product name is required.",
  description: "Please enter the description",
  price: "Please enter the price",
  offer_price: "Please enter the offer price",
  category_id: "Please select the category",
  image: "Please upload atleast one image",
});