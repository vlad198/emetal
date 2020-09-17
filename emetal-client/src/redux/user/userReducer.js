const {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAIL,
  LOGOUT,
  LOGIN_REQUEST,
  IS_AUTHENTICATED_REQUEST,
} = require("./userTypes");

const initialState = {
  auth: false,
  user: null,
  firstLoad: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        auth: true,
        user: payload.user,
      };
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("accessToken");
      return {
        ...state,
        auth: false,
        user: null,
      };
    case IS_AUTHENTICATED_FAIL:
      return {
        ...state,
        firstLoad: false,
      };
    case IS_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        auth: true,
        user: payload,
        firstLoad: false,
      };

    case LOGIN_REQUEST:
    case IS_AUTHENTICATED_REQUEST:
    default:
      return state;
  }
};

export default reducer;
