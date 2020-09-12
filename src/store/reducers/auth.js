import * as actionTypes from "../actions/actionTypes";

const INITIAL_STATE = {
  loading: false,
  error: false,
  message: "",
  name: "Subha",
  team: "",
  role: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AUTH_FAIL:
      return state;

    case actionTypes.AUTH_START:
      return state;

    case actionTypes.AUTH_SUCCESS:
      return state;

    default:
      return state;
  }
};

export default reducer;
