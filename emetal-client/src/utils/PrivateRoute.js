import React, { Fragment } from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = (props) => {
  if (props.auth) return <Fragment>{props.children}</Fragment>;
  return <Redirect to="/login" />;
};

export default PrivateRoute;
