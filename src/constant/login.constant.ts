export enum LoginError {
  inValidCred = "Invalid Credentials, Please enter again.",
}

export const AuthError = Object.freeze({
  invalidCred: LoginError.inValidCred,
});
