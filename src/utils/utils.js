import { toast } from "react-toastify";

import { EMAIL_VALID_REGEX } from "./constant";

export const checkEmailValidation = (email) => {
  if (EMAIL_VALID_REGEX.test(email)) {
    return true;
  }
  return false;
};

export const showToast = (isSuccess, toastMessage) => {
  toast(toastMessage, {
    onOpen: (props) => console.log("Toast mounted in DOM"),
    onClose: (props) => console.log("Toast unmounted from DOM"),
    autoClose: 6000,
    type: isSuccess ? toast.TYPE.SUCCESS : toast.TYPE.ERROR,
    hideProgressBar: true,
    position: toast.POSITION.TOP_RIGHT,
    pauseOnHover: true,
  });
};
