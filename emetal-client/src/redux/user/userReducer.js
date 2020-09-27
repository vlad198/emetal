const {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAIL,
  LOGOUT,
  LOGIN_REQUEST,
  IS_AUTHENTICATED_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAIL,
} = require("./userTypes");

const initialState = {
  auth: false,
  user: null,
  firstLoad: true,
  loadingAction: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        auth: true,
        user: payload.user,
        loadingAction: false,
      };
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("accessToken");
      return {
        ...state,
        auth: false,
        user: null,
        loadingAction: false,
      };
    case IS_AUTHENTICATED_FAIL:
      console.log("loading Action false");
      return {
        ...state,
        firstLoad: false,
        loadingAction: false,
      };
    case IS_AUTHENTICATED_SUCCESS:
      return {
        ...state,
        auth: true,
        user: payload,
        firstLoad: false,
        loadingAction: false,
      };

    case REGISTER_SUCCESS:
      return { ...state, loadingAction: false };

    case REGISTER_FAIL:
      return { ...state, loadingAction: false };

    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case IS_AUTHENTICATED_REQUEST:
      return { ...state, loadingAction: true };
    default:
      return state;
  }
};

export default reducer;
