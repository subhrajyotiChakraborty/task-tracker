import { EMAIL_VALID_REGEX } from "./constant";

export const checkEmailValidation = (email) => {
  if (EMAIL_VALID_REGEX.test(email)) {
    return true;
  }
  return false;
};
