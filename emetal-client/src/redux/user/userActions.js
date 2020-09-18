import userApi from "../../api/userApi";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  IS_AUTHENTICATED_SUCCESS,
  IS_AUTHENTICATED_FAIL,
  LOGOUT,
  LOGIN_REQUEST,
  IS_AUTHENTICATED_REQUEST,
} from "./userTypes";

// LOGIN

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFail = (err) => {
  return {
    type: LOGIN_FAIL,
    payload: err.message,
  };
};

export const login = (userData) => {
  return (dispatch) => {
    dispatch(loginRequest());
    userApi
      .post("/api/auth/login", userData)
      .then((res) => dispatch(loginSuccess(res.data)))
      .catch((err) => dispatch(loginFail(err)));
  };
};

// IS AUTHENTICATED

export const isAuthRequest = () => ({
  type: IS_AUTHENTICATED_REQUEST,
});

export const isAuthSuccess = (data) => {
  return {
    type: IS_AUTHENTICATED_SUCCESS,
    payload: data,
  };
};

export const isAuthFail = (err) => {
  return {
    type: IS_AUTHENTICATED_FAIL,
    payload: err.message,
  };
};

export const isAuth = () => {
  return (dispatch) => {
    dispatch(isAuthRequest());
    userApi
      .get("/api/auth/authenticated")
      .then((res) => dispatch(isAuthSuccess(res.data)))
      .catch((err) => dispatch(isAuthFail(err)));
  };
};

// LOGOUT

export const logoutSuccess = () => {
  return {
    type: LOGOUT,
  };
};

export const logout = () => {
  return (dispatch) => {
    userApi.get("/api/auth/logout").then((res) => dispatch(logoutSuccess()));
  };
};
