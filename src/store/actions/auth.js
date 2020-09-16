import { showToast } from "../../utils/utils";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authFail = (errorMsg) => {
  return {
    type: actionTypes.AUTH_FAIL,
    payload: errorMsg,
  };
};

export const authSuccess = (userData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    payload: userData,
  };
};

export const auth = () => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      setTimeout(() => {
        const response = {
          name: "Subha",
          role: "developer",
          team: "A-Team",
        };
        dispatch(authSuccess(response));
      }, 2000);
    } catch (error) {
      dispatch(error);
      console.log(error);
    }
  };
};
