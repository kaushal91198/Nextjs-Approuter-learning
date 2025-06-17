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
  lesson_name: "Lesson name is required.",
  duration: "Please enter the duration time.",
  durationNumber: "Duration must be a number",
  type_id: "Please select the type.",
  category_id: "Please select the category",
  sub_category_id: "Please select the sub category",
  uid: "Please enter the uid.",
  background_color_id: "Please select the background color.",
});

export const MockExamSchemaError = Object.freeze({
  name: "Mock exam name is required.",
  category_id: "Please select the category",
  exam_id: "Please select the sub exam",
});

export const QuestionSchemaError = Object.freeze({
  name: "Question name is required.",
  sub_category_id: "Please select the sub category",
  content: "Question content is required.",
  feedback: "Question feedback is required.",
});

export const AnswerSchemaError = Object.freeze({
  answer_type: "Answer type is required.",
  is_correct: "This is required field.",
  content: "Answer content is required.",
  contentNumber: "Content must be a number",
  image: "Please upload the image.",
});

export const LessonSchemaError = Object.freeze({
  name: "Lesson name is required.",
  category_id: "Please select the category",
  sub_category_id: "Please select the sub category",
  block: "Please select the content",
  type: "Type is required",
  exam_id: "Please select the lesson.",
});

export enum SignupError {
  first_name = "First name is required",
  last_name = "Last name is required",
  required = "Password is required",
  valid = "Must contain 8 characters, one uppercase, one lowercase, one number and one special case character",
  characteValid = "Must contain at least 8 characters",
  upperCaseValid = "Must contain at least one uppercase character.",
  lowerCaseValid = "Must contain at least one lowercase character.",
  numAndScvalid = "Must contain at least one number or special character.",
  confirm_required = "Confirm password is required",
  match = "Password and confirm password is not matched.",
  captcha = "Recaptcha Error",
}

export const PlanSchemaError = Object.freeze({
  name: "Plan name is required.",
  price: "Price is required.",
  duration: "Duration is required.",
  exam_ids: "Please select the practice exam.",
  mock_exam_ids: "Please select the mock exam.",
  lesson_ids: "Please select the lesson.",
  durationNumber: "Duration must be a number",
  priceNumber: "Price must be a number",
});
